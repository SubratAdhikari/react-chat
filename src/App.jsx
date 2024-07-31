import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Signup_page from './components/Signup_page';
import Dashboard from './components/Dashboard';
import OnlinePage from './components/OnlinePage';
import Chatpage from './components/Chatpage';
import { auth } from './components/firebase';




function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/react-chat/' element={user ? <Navigate to='/react-chat/dashboard' /> : <Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup_page />} />
          <Route path='/react-chat/dashboard' element={<Dashboard />} />
          <Route path='/react-chat/onlinepage' element={user ? <OnlinePage /> : <Home />} />
          <Route path='/chatpage' element={<Chatpage />} />
         
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
