import React, { useState, useEffect } from 'react';
import Button from './Button';
import Logo from '../assets/Header/Logo.png';
import { Link } from 'react-router-dom';

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInPopup, setIsLoggedInPopup] = useState(false);
  const [isSigUpPopup, setIsSigUpPopup] = useState(false);

  // Retrieve the value from localStorage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem('isLoggedIn');
    if (storedValue === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => { 
    setIsLoggedInPopup(true);
    // try {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   setIsLoggedIn(true); // Update the state after login
    //   console.log('Login status saved in local storage');
    // } catch (error) {
    //   console.error('Error setting item in local storage', error);
    // }
  };

  const handleLogoutClick = () => {
    try {
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false); // Update the state after logout
      console.log('Logout status saved in local storage');
    } catch (error) {
      console.error('Error setting item in local storage', error);
    }
  };

  return (
    <div className='w-full h-[5rem] bg-slate-300 flex justify-between items-center'>
      <div className='w-1/3 text-4xl text-center pl-10'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='w-1/3 flex justify-center items-center text-lg'>
        <ul className='inline-flex space-x-20 font-semibold'>
          <Link to='/'><li className='hover:text-blue-500 cursor-pointer'>Home</li></Link>
          <Link to='/dashboard'><li className='hover:text-blue-500 cursor-pointer'>Resources</li></Link>
          <Link to='/support'><li className='hover:text-blue-500 cursor-pointer'>Support</li></Link>
        </ul>
      </div>
      <div className='w-1/3 flex justify-end items-center pr-5'>
        {isLoggedIn ? (
          // Show Logout when the user is logged in
          <>
           <Link to="/profile"><img width="60" height="60" src="https://img.icons8.com/ios-filled/50/228BE6/user-male-circle.png" alt="user-male-circle"/></Link>
            <p className='cursor-pointer' onClick={handleLogoutClick}>Logout</p>
          </>
        ) : (
          // Show Login and Signup when the user is not logged in
          <div className='flex items-center'>
            <div className='mr-5' onClick={handleLoginClick}>
              <Button  value='Login' />
            </div>
            <div onClick={() => setIsSigUpPopup(true)} >
              <Button value='Signup' />
            </div> 
          </div>
        )}
      </div>

      { isSigUpPopup &&(<div className=' fixed left-0 top-0 z-40 w-full h-[100vh] flex justify-center items-center bg-black/90'>
        <div className='bg-white p-6 rounded-md w-[30%]'>
        <img onClick={() => setIsSigUpPopup(false)} width="22" height="22" src="https://img.icons8.com/material-rounded/24/1A1A1A/close-window.png" alt="close-window" className='float-right mt-2 '/>

        <h2 className='text-2xl font-bold mb-4'>Sign In</h2>

        <form>
            <div className=' mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>First Name</lable>
            <input id='firstName' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your First Name'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Last Name</lable>
            <input id='lastName' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Last Name'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Email</lable>
            <input id='email' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Email'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Department</lable>
            <input id='lastName' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Last department'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Auth Code</lable>
            <input id='authCode' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter provided authentication code'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>User Name</lable>
            <input id='userName' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your User Name'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Password</lable>
            <input id='password' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Password'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Confirm Password</lable>
            <input id='confirmPassword' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Retype Password'required />
            </div>

            <div className='flex justify-between items-center mb-4'>
            <button type='submit' className='bg-blue-600 py-2 px-4 rounded-full text-white font-semibold' >Register</button>
            <p className='text-[15px'>Already have account <a href='#' className='text-blue-600 text-sm hover:underline'>Login here </a></p>

            </div>
           
        </form>
        </div>
      </div>)}

      { isLoggedInPopup &&(<div className=' fixed left-0 top-0 z-40 w-full h-[100vh] flex justify-center items-center bg-black/90'>
        <div className='bg-white p-6 rounded-md w-[30%]'>
        <img onClick={() => setIsLoggedInPopup(false)} width="20" height="20" src="https://img.icons8.com/material-rounded/24/1A1A1A/close-window.png" alt="close-window" className='float-right mt-2 '/>

        <h2 className='text-2xl font-bold mb-4'>Sign In</h2>

        <form>
            <div className=' mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>User Name</lable>
            <input id='username' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Username'required />
            </div>

            <div className='mb-5'>
            <lable className='block text-gray-700 text-sm font-bold mb-2'>Password</lable>
            <input id='password' type='text'className='w-full px-3 py-2 border rounded-md' placeholder='Enter your Password'required />
            </div>
            
            <div className='flex justify-between items-center mb-4'>
              <button type='submit'className='bg-blue-600 py-2 px-4 rounded-full text-white font-semibold'>Sign In</button>
              <a href='#' className='text-blue-600 text-sm hover:underline'>Forgot Password? </a>
            </div>

        </form>
        </div>
      </div>)}
    </div>
  );
}
