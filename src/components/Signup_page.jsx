import React, { useState } from 'react';
import './Signup_page.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import myImage from '../assets/log-in.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import {setDoc,doc} from 'firebase/firestore';


const Signup_page = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [name, setname] = useState("");


  const signupbtn = async() =>{
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid),{
          user_details: {
            email: user.email,
            name: name,}

        });
      }
      console.log("User Successfully resistered! ");

      window.location.href="/home";
      // toast.success("Successfully resistered!", {
      //   position: "top-center",
      // });
    } catch(error){
      console.log(error.message);
      // toast.error(error.message, {
      //   position: "top-center",
      // });
    }
  };

  return (
    <>

    <div className='abox'>
      <div className='box'> 
            <div className='box2'>
                <img className='login_img' src={myImage} alt="Description of image" />
                <div className='userid_box'>
                <PersonIcon className='person_icon' />
                <input type='text' placeholder='Name' onChange={(e) => setname(e.target.value)}></input>
                </div>
                <div className='userid_box'>
                <EmailIcon className='person_icon' />
                <input type='email' placeholder='E-mail' onChange={(e) => setemail(e.target.value)}></input>
                </div>
                <div className='userid_box'>
                <KeyIcon className='person_icon'/>
                <input type='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}></input>
                </div>
                <div className='userid_box'>
                <KeyIcon className='person_icon'/>
                <input type='password' placeholder='Conform Password' onChange={(e) => setcpassword(e.target.value)}></input>
                </div>
                <div className='btn_div'>
                <button className='btn_signup' onClick={signupbtn}>Signup</button>
                <p className='already_account'>Already have account? <a href='/home'>Login</a>
                </p>
                </div>

            </div>  

      </div>
    </div>
    </>
  );
}

export default Signup_page