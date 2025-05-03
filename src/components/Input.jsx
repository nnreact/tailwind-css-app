import React from 'react'

function Input({placeholder,type,label}) {
  return (
    <div>
      <label className='block mb-1'>{label}</label>
    <input type={type} placeholder={placeholder} className='w-full p-2 rounded-md border border-zinc-300 mb-4' />
    </div>
  )
}

export default Input
