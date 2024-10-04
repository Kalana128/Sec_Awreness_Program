import React from 'react'

export default function ProgressNames(props) {
  return (
    <div className='flex justify-start items-center w-[100%]'>
        <div className=' bg-white text-blue-600  w-[150px] p-2 text-center  text-2xl font-semibold '> 
        <span>{props.title}</span>
        </div>

        <div className=' w-[70%] h-[48px] bg-white ml-10'>
        </div>

    </div>
  )
}
