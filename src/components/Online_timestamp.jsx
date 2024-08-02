import React from 'react';
import { auth, db } from './firebase';
import { doc, runTransaction, updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const makeuseronline = async() =>{
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
    const userRef = doc(db, "Users", user.uid);

    try {
      await runTransaction(db, async (transaction) => {
        // const userDoc = await transaction.get(userRef);
        // if (!userDoc.exists()) {
        //   throw "Document does not exist!";
        // }

        transaction.update(userRef, {
          'user_details.lastonline': new Date().toISOString()
        });
      });
      console.log("User online timestamp updated with transaction");
    } catch (e) {
      console.error("Transaction failed: ", e);
    }
  }

  }
makeuseronline();
const Online_timestamp = () => {
  const intervalId = setInterval(() => {
      makeuseronline();
    }, 5000);

    return () => clearInterval(intervalId);
}

export default Online_timestamp