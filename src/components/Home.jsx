import React, { useState } from 'react';
import './Home.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import myImage from '../assets/log-in.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(''); 

  const loginbtn = async() =>{
    setIsLoading(true);
    setError('');
    try{
      await signInWithEmailAndPassword(auth,email,password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User Successfully resistered! ");

      window.location.href="/dashboard";
      
    } catch(error){
      console.log(error.message);
      setError(error.message);
    }finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <div className='abox'>
      {isLoading ? (
        <div className='loading'>
        <h1 >Loading...</h1> 
        </div>
      ) : (
      <div className='box'> 
            <div className='box2'>
                <img className='login_img' src={myImage} alt="Description of image" />
                {error && <span className="error-message">{error}</span>}
                <div className='userid_box'>
                <PersonIcon className='person_icon' />
                <input type='text' placeholder='E-mail' onChange={(e) => setemail(e.target.value)}></input>
                </div>
                <div className='userid_box'>
                <KeyIcon className='person_icon'/>
                <input type='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}></input>
                </div>
                <div className='btn_div'>
                <button className='btn_login' onClick={loginbtn}>Login</button>
                <p className='goto_signup'>Haven't signup yet? <a href='/signup'>Signup</a></p>
                </div>
            </div>  

      </div>
      )}
    </div>
    </>
  )
}

export default Home