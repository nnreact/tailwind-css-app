import React from 'react'
import Input from './Input'
import Button from './Button'
function Card() {
    return (
        <div className='bg-white rounded-[28px] shadow-xl p-6 h-[400px] w-[400px]'>
            <h1 className='text-2xl font-bold text-center'>Login</h1>
            <hr className='mt-[16px] border-zinc-300' />
            <div className='mt-[32px] mb-[48px]'>
                <Input label="E-mail Address" type="email" placeholder="Enter your Email" />
                <Input label="Password" type="password" placeholder="Enter your Password" />
            </div>
            <Button text="Login" />
        </div>
    )
}

export default Card
