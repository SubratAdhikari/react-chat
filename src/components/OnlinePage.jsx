import React from 'react';
import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { collection, getDocs, query, where, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Online_timestamp from './Online_timestamp';
import './OnlinePage.css';
import Chatpage from './Chatpage';
import { useNavigate } from 'react-router-dom';

const OnlinePage = () => {

  const [onlines, setOnlines] = useState([[]]);
  const navigate = useNavigate(); 

  // const fetchOnlineUsers = async () => {
  //   const twentySecondsAgo = Timestamp.fromDate(new Date(Date.now() - 30000)); // 25 seconds ago
  //   const usersQuery = query(collection(db, "Users"), where('user_details.lastonline', '>', twentySecondsAgo));
  //   const usersSnapshot = await getDocs(usersQuery);
  //   const onlineUsers = usersSnapshot.docs.map(doc => doc.data().user_details.name);
  //   setOnlines(onlineUsers);
  //   console.log("hehe haha" + onlineUsers + twentySecondsAgo);
  // };

  const fetchOnlineUsers = async () => {
    try {
      const usersCollection = collection(db, "Users");
      const usersSnapshot = await getDocs(usersCollection);
      const now = new Date();
      const onlineUsers = usersSnapshot.docs.filter(doc => {
        const user = doc.data();
        const lastOnline = user.user_details?.lastonline ? new Date(user.user_details.lastonline) : null;
        // console.log(lastOnline);
        return lastOnline && (now - lastOnline) <= 30000; // 25 seconds
      }).map(doc => ({
        username: doc.data().user_details.name,
        uid: doc.id
      }));
      // .map(doc => doc.data().user_details.name);
      setOnlines([onlineUsers]);
      console.log('online user updated');
    } catch (error) {
      console.error("Error fetching online users: ", error);
    }
  };


  useEffect(() => {
    Online_timestamp();
    fetchOnlineUsers();

    const intervalId = setInterval(() => {
      fetchOnlineUsers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  function openchat(clientuid, clientusername){
    navigate('/chatpage', { state: { clientuid, clientusername} }); 
  }


  return (
    <div className='display'>
        <h1 className='heading'>Online Users</h1>
      <ol className='online_list'>
            {onlines && onlines.map((onlineGroup, groupIndex) =>
                onlineGroup.map((user, userIndex) =>
                <li key={`${groupIndex}-${userIndex}`}>
                  <span className='onlineuser'>{user.username}</span>
                  <button 
                    className='btn_chat'
                    onClick={() => openchat(user.uid, user.username)}
                  >
                    Chat
                  </button>
                </li>
              )
            )}
        </ol>
      </div>
  )
}

export default OnlinePage
