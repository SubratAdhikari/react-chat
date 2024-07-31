import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Todolist from './Todolist';
import './Dashboard.css';
import Online_timestamp from './Online_timestamp';


const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async() =>{
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      const docRef = doc(db,"Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()){
        setUserDetails(docSnap.data());
      }else {
        console.log("User is not logged in");
      }
    });
    
  };


  useEffect(()=>{
    fetchUserData();
    Online_timestamp();
    
  },[]);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href="/react-chat/home";
      console.log("User logged out successfully!");
    }catch (error) {
      console.error("Error loging out: ", error.message);
    }
  }
 

  return (
    <div className='display'>
      {userDetails ? (
        <>
        <h3>Welcome {userDetails.user_details.name}</h3>
        {/* <div>
          <p>Email: {userDetails.user_details.email}</p>
          
          <p>Name: {userDetails.user_details.name}</p>
        </div> */}
        <button className='btn-logout' onClick={handleLogout}>Logout</button>
        <Todolist></Todolist>
        </>
      ):(
        <h1>Loading.....</h1>
      )}
    </div>
  );
}

export default Dashboard
