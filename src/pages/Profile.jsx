import React from 'react'
import UpdateButton from '../components/UpdateButton'
import Button from '../components/Button'
import profileImage from '../assets/Profile/profile.jpeg';



export default function Profile() {
  return (
    <div className=' w-[60%] mx-auto'>
      
      {/* Profile photo */}
      <div className='p-10'>
        <div className='mx-auto w-[40%] flex justify-center'> 
          <div className=' bg-green-600 aspect-square h-[200px] rounded-full relative border-blue-600 border-[8px] ' style={{backgroundImage: `url(${profileImage})`, backgroundSize: 'cover' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          {/* <div className=' h-[200px] w-[30%]'> */}
            <div className=' absolute right-4 bottom-0 bg-blue-600 bg-opacity-100 aspect-square p-1'>
              <UpdateButton value="Edit"/>
            </div>
          {/* </div> */}
          </div> 
        </div>

        <div><h1 className="text-2xl font-bold text-center text-[30px] mt-4">Welcome <span className=' text-blue-600'>Kalana!</span></h1></div>
      </div>


      {/* Personalinfo */}
      <div>
        <div  className='mb-5 border p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-3'>Personal Infromations</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" name="fullName" placeholder="Enter your full name" className="border border-gray-300 p-2 w-full rounded-md"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="text" name="email" placeholder="Enter your Email" className="border border-gray-300 p-2 w-full rounded-md"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input type="text" name="phone" placeholder="Enter your Mobile Number" className="border border-gray-300 p-2 w-full rounded-md"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" name="address" placeholder="Enter your Address" className="border border-gray-300 p-2 w-full rounded-md"/>
          </div>
  
          <div><Button value="Update" /></div>

        </div>
      </div>

      {/* Change password */}
      <div className='mb-5 border p-4 rounded-lg mt-2'>
        <h2 className="text-xl font-semibold mb-3">Change Password</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input type="password" name="currentPassword" placeholder="Enter current password" className="border border-gray-300 p-2 w-full rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input type="password" name="newPassword" placeholder="Enter new password" className="border border-gray-300 p-2 w-full rounded-md"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm New Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm new password" className="border border-gray-300 p-2 w-full rounded-md"/>
        </div>

        <div><Button value="Update" /></div>

      </div>
    </div>
  )
}
