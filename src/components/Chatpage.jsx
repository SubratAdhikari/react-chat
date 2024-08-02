import React from 'react'
import { useLocation } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import './Chatpage.css';
import { getFirestore, doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import Online_timestamp from './Online_timestamp';

const Chatpage = () => {
    const location = useLocation();
    const { clientuid, clientusername } = location.state || {};
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    const db = getFirestore();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const btnSend = () => {
        if (message.trim() !== "") {
            addMessage(message);
            setMessage('');
        }
    };

    const addMessage = async (message) => {
        const initialChatId = userId + "_" + clientuid;
        let chatid = initialChatId;
        let chatDocRef = doc(db, "chats", chatid);

        try {
            let docSnapshot = await getDoc(chatDocRef);

            if (!docSnapshot.exists()) {
                const reversedChatId = clientuid + "_" + userId;
                chatDocRef = doc(db, "chats", reversedChatId);
                docSnapshot = await getDoc(chatDocRef);

                if (!docSnapshot.exists()) {
                    chatid = initialChatId;
                    chatDocRef = doc(db, "chats", chatid);
                } else {
                    chatid = reversedChatId;
                }
            }

            const now = new Date().toISOString();
            const currentData = docSnapshot.exists() ? docSnapshot.data() : {};
            const userMessages = currentData["messages"] || [];

            userMessages.push({
                user: userId,
                message: message,
                timestamp: now
            });

            if (docSnapshot.exists()) {
                await updateDoc(chatDocRef, { messages: userMessages });
            } else {
                const initialData = { messages: userMessages };
                await setDoc(chatDocRef, initialData);
            }

            setMessages(userMessages);
        } catch (error) {
            console.error("Error adding message: ", error);
        }
    };

    const getChatData = async (userId, clientuid) => {
        const initialChatId = userId + "_" + clientuid;
        let chatid = initialChatId;
        let chatDocRef = doc(db, "chats", chatid);

        try {
            let docSnapshot = await getDoc(chatDocRef);

            if (!docSnapshot.exists()) {
                const reversedChatId = clientuid + "_" + userId;
                chatDocRef = doc(db, "chats", reversedChatId);
                docSnapshot = await getDoc(chatDocRef);

                if (!docSnapshot.exists()) {
                    return [];
                }
            }

            return docSnapshot.data().messages || [];
        } catch (error) {
            console.error("Error retrieving chat data: ", error);
            return [];
        }
    };

    const renderChatMessages = async () => {
        const messages = await getChatData(userId, clientuid);
        setMessages(messages);
    };

    useEffect(() => {
        Online_timestamp();
        renderChatMessages();

        const intervalId = setInterval(() => {
            renderChatMessages();
        }, 2000); 

        return () => clearInterval(intervalId); 

    }, []);

    return (
        <div className='display'>
            <h1 className='ClientName'>{clientusername}</h1>
            <div className='chatbox'>
                <div className='jjj'>
                <div id="chat-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.user === userId ? 'user-message' : 'client-message'}`}>
                            {msg.user === userId ? `${msg.message}` : `${msg.message}`}
                        </div>
                    ))}
                </div>
                </div>
                <div className='chatboxbuttom'>
                    <input className='chatinput' value={message} onChange={handleInputChange} placeholder='Message..' />
                    <button className='btn_send' onClick={btnSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatpage