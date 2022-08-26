import './App.css';
import React from 'react';
import Links from './LinkComponets/Link';
import Profile from './Allcomponets/Profile';
import logo from './logo.png'
import Home from './Allcomponets/Home';
import Signup from './Allcomponets/Signup';
import Otppage from './Allcomponets/Otp';
import Chnagepic from './Changeprofilepic/Changepro';
import Buyorder from './Allcomponets/Buyorder';
import Cartlist from './Allcomponets/Addtocart';
import Displayorder from './Allcomponets/Displayorder';
import Verifyotp from './Allcomponets/Veriflyotp';
import Login from './Allcomponets/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react';

import { useEffect } from 'react'
//import Classcomponets from './Classcomponet

import Changepassword from './Changepassword/Changepass';

function App() {
  const [accountbtn, showaccountbtn] = useState('')
  //for display user account name
  const [currentstyle, setdisplaypropeties] = useState('block');
  //for loguutmenu
  const [displaylogoutblock, updatemenu] = useState('')
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('userdata'))
    if (user !== null) {
      setdisplaypropeties('none');
      showaccountbtn(
        <div style={{ display: 'flex' }}>
          <img src='https://akashsir.in/myapi/ecom1/upload/noimage.png' alt='' width={30} height={30} style={{ borderRadius: '50%' }} />
          <h4 style={{ color: 'white', fontSize: '18px', textTransform: 'capitalize' }}>{user.username}</h4>
        </div>
      )

    }
    else {
      setdisplaypropeties('block');
      showaccountbtn('')
    }
  }, [])

  function displaylogoutmenu() {
    //api-add-order.php
    updatemenu(
      <div className='parent_block'>
        <div>
          <span onClick={back}>
            <Link to='profile' style={{ color: 'black', textDecoration: 'none' }}>Your Profile</Link>
          </span>
        </div>
        <div>
          <span onClick={back}>
            <Link to='/Chnagepic' style={{ color: 'black', textDecoration: 'none' }}>Chnage profile pic</Link>
          </span>
        </div>
        <div>
          <span onClick={back}>
            <Link to='/cart' style={{ color: 'black', textDecoration: 'none' }}>My cart</Link>
          </span>
        </div>
        <div>
          <span onClick={back}>
            <Link to='/Displayorder' style={{ color: 'black', textDecoration: 'none' }}>My order</Link>
          </span>
        </div>
        <div>
          <span onClick={logout}>Log out</span>
        </div>

      </div>
    )
  }
  function back() {
    updatemenu('')
  }
  function logout() {
    localStorage.removeItem('userdata');
    window.location.href = '/'
  }

  function displaynone() {
    setdisplaypropeties(
      'none'
    )
  }
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Link to='/' style={{ color: 'white', fontSize: '20px' }} onClick={back}>
            <img src={logo} alt='' width={250} height={50} />
          </Link>
          <div className='link_block' style={{ display: currentstyle }}>
            <Links />
          </div>
          <div className='user_account' onClick={displaylogoutmenu}>
            {accountbtn}
          </div>
        </div>
        <div className='router'>
          {displaylogoutblock}

          <Routes>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup onClick={displaynone} />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/changepassword' element={<Changepassword />}></Route>
            <Route path='/otp' element={<Otppage />}></Route>
            <Route path='/verify' element={<Verifyotp />}></Route>
            <Route path='/cart' element={<Cartlist />}></Route>
            <Route path='/Buy' element={<Buyorder />}></Route>
            <Route path='/Displayorder' element={<Displayorder />}></Route>
            <Route path='/Chnagepic' element={<Chnagepic />}></Route>

          </Routes>



        </div>
      </Router>
    </div>
  );
}

export default App;
