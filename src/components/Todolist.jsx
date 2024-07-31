import { Margin } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import './Todolist.css';

const Todolist = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewtask] = useState("");

    useEffect(() => {
        getAllFromArray(); // Fetch tasks from Firestore when component mounts
    }, []);

    function handelInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
        addToArray(newTask);
        setNewtask('');
        getAllFromArray();      
        }

    }

    const addToArray = async (newtask) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const userId = user.uid;
            const userRef = doc(db, "Users", userId);

            try {
                await updateDoc(userRef, {
                    todolist: arrayUnion(newtask)
                });
                console.log("Array data added successfully!");
            } catch (error) {
                console.error("Error adding array data:", error);
            }
        } else {
            console.log("No user is signed in.");
        }
    };

    
    const getAllFromArray = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            try {
                const userId = user.uid;
                const userRef = doc(db, "Users", userId);
                const docSnap = await getDoc(userRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setTasks( userData.todolist); // Default to empty array if todolist does not exist
                    console.log("Retrieved todolist data:");
                } else {
                    console.log("Document does not exist.");
                    
                }
            } catch (error) {
                console.error("Error retrieving todolist data:", error);
                
            }
        } else {
            console.log("No user is signed in.");
           
        }
    };



    function deleteTask(index){
        const auth = getAuth();
        const user = auth.currentUser;

        const taskToDelete = tasks[index];
        const userId = user.uid;
        const userRef = doc(db, "Users", userId);
        try {
            updateDoc(userRef, {
                todolist: arrayRemove(taskToDelete)
            });
            console.log("Task deleted successfully from Firestore.");
        } catch (error) {
            console.error("Error deleting task from Firestore:", error);
        }
        const updatedTasks = tasks.filter((_,i) => i !== index);
        // setTasks(updatedTasks);
        getAllFromArray();

    }

  return (
    <div className='todolist'>
        <h1 className='heading'>To Do List</h1>
        
        <div>
            <input 
                className='input_task'
                type='text'
                placeholder='Enter a task....'
                value={newTask}
                onChange={handelInputChange}
            />
            <button
            className='btn_add'
            onClick={addTask}
            >
            Add
            </button>
        </div>
        <ol className='task_list'>
            {tasks && tasks.map((task, index) =>
                <li key={index}>
                    <span className='task'>{task}</span>
                    <button 
                    className='btn_delete'
                    onClick={() => deleteTask(index)}
                    >
                        Delete
                    </button>
                </li>
            )}
        </ol>

        <button
        onClick={() => window.location.href="/react-chat/onlinepage"}
        >
            Online
        </button>
      
    </div>
    
  )
 
}

export default Todolist
