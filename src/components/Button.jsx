import React from 'react'

export default function Button(props) {
  return (
    <button className=' bg-blue-600 py-3 px-12 rounded-full text-white font-semibold text-[15px]'>
      {props.value}
    </button>

  )
}
