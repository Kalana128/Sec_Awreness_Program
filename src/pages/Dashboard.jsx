import React from 'react'
import LearningButton from '../components/LearningButton'
import ProgressNames from '../components/ProgressNames'
import ProgressBar from '../components/ProgressBar'
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      {/* Progress and Welocme massege */}
      <div className=' flex justify-between items-center mt-20 w-[90%] mx-auto'>

        {/* Welcome Note */}
        <div className='w-[40%] bg-slate-700'>

          <div className=' bg-blue-600 w-full mx-auto px-8 py-10 text-justify'>
            <div className=' -mt-8'>
              <span className='text-white font-semibold text-[48px]'>Hello, Kalana!</span>
            </div>
            <div className=' mt-5'>
              <span className='text-2xl text-white '> Welcome to our Security Awareness Training! As a valued member of our organization, you play a critical role in protecting our systems, data, and people from cyber threats. This training will empower you with the knowledge and skills to identify and mitigate risks, and help build a culture of security that is strong, resilient, and unwavering. Let's work together to build a safer and more secure organization for everyone!</span>
            </div>
          </div>
          
        </div>

        {/* Progress bar */}
        <div className=' bg-slate-200 w-[55%] p-5 '>

            <div>
              <span className=' text-blue-600 font-semibold text-[30px]'>Your Progress</span>
            </div>

            <div>
              <div className=' m-10'>
              <ProgressNames title='Read' />
              </div>
            </div>

              <div className='m-10'>
              <ProgressNames title='Practical' />
              </div>
                 
        </div>
      </div>

      <div className=' bg-slate-200 mt-16 py-10 w-[90%] mx-auto '>

        <div className='pb-4 px-8 mb-5 '> 
          <span className=' text-4xl font-bold text-blue-500'>Enroll Cources,</span>
        </div>

        <div className='flex justify-around items-center'>
          <Link to='/preAssement' className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square'><LearningButton title='Pre-Assessment' icon='PA'/></Link>
          <Link to='/content' className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square '><LearningButton title='Reading' icon='RE'/></Link>
          <LearningButton title='Practical' icon='PR'/>
          <Link to='/finalassesment' className=' bg-white rounded-3xl p-5 flex flex-col justify-center items-center w-[13%] aspect-square'><LearningButton title='Final-Assessment' icon='FA'/></Link>
        </div> 
      </div>

    </div>
  )
}
