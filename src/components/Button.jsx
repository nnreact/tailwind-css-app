import React from 'react'

function Button({ text }) {
    return (
        <button className='px-4 py-2 rounded-md bg-amber-500 w-full text-white font-bold'>
            {text}
        </button>
    )
}

export default Button
