import React from 'react'
import LearnIcon from '../assets/Dashbord/Learn/LearnIcon.png'

export default function LearningButton(props) {
  return (
    <div>
        <div className=' relative'>
        <img src={LearnIcon} alt='ButtonIcon' className='w-[130px] h-[150px]'/>
        <span className=' absolute top-[30%] left-[30%] text-4xl font-bold text-blue-500'>{props.icon}</span>
        </div>
      <p className=' mt-5 w-full text-center text-xl font-semibold hover:text-blue-600 cursor-pointer hover:text-[20px]'>{props.title}</p>
    </div>
  )
}
