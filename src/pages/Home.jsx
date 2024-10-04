import React, { useState} from 'react';
import WelcomeAnime from '../assets/Home/WelcomeAnime.mp4'
export default function Home() {

  const [isSigUpPopup, setIsSigUpPopup] = useState(false);


  return (
    <div className=' flex justify-between items-center w-[90%] mx-auto mt-[4%] relative'>

      <div className='  w-[60%] z-10'>
      <div className=' mb-10'><p className=' text-[64px] leading-[80px] font-semibold'>Empower Your Team<br></br> With <span className=' text-blue-700'>Security Awareness</span></p></div>

        <div className=' text-justify w-[90%] mx-auto my-[8%]'><span className=' text-[64px] text-blue-600 leading-3'>"</span><span className=' text-2xl leading-10'>Security awareness is not just about protecting our systems and data, it's about protecting our people, our reputation, and our future. It's about being vigilant, proactive, and responsible in the face of ever-evolving threats. By empowering our employees with the knowledge and skills to identify and mitigate risks, we can build a culture of security that is strong, resilient, and unwavering. Let us prioritize security awareness training as a critical investment in our collective success and safety.</span>
          <span className=' text-[64px] text-blue-600 leading-[0px] relative'><span className=' absolute top-16 left-0'>"</span></span>
        </div>
        
        <div className=' mt-14 ml-8'onClick={() => setIsSigUpPopup(true)}>
          <button className=' bg-blue-600 py-3 px-5 rounded-full text-white font-semibold text-[22px] h-[60px] '>
          <span>Start Training</span><img className=' inline-block ml-2' width="36" height="36" src="https://img.icons8.com/ios-filled/50/FFFFFF/right--v1.png" alt="right--v1"/>
         </button>
        </div>

      </div>
      
      {/* <div className=' bg-green-400 w-[40%] h-[100px]'> */}
         <video className=' h-[70vh] absolute top-0 right-0' src={WelcomeAnime} autoPlay loop muted />
      {/* </div> */}

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
    </div>
  )
}
