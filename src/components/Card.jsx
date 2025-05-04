import React from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form'
function Card() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const {errors} = formState;

    const handleFormSubmit = async (data) => {
        // console.log("form submitted", data);

        const userData = {
            email: data.emailtxt,
            password: data.passwordtxt,
            firstName: data.firstname,
            lastName: data.lastname,
            age: data.agetxt
        }

        await fetch("https://68172a3726a599ae7c397efd.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        console.log("userData", userData);

    }

    console.log("errors", errors);

    return (
        <form autoCorrect='off' noValidate onSubmit={handleSubmit(handleFormSubmit)} className='bg-white rounded-[28px] shadow-xl p-6 h-auto w-[400px]'>
            <h1 className='text-2xl font-bold text-center'>Sign up</h1>
            <hr className='mt-[16px] border-zinc-300' />
            <div className='mt-[32px] mb-[48px]'>
                <div>
                    <label className='block mb-1'>First Name</label>
                    <input {...register("firstname", { required: "Hey Buddy please enter your First Name" })} type="text" placeholder="Enter your First Name" className={`w-full p-2 rounded-md border ${errors.firstname ? "border-red-500" : "border-zinc-300"}`} />
                </div>
                {
                    errors.firstname && <p className='text-red-400 mb-4'>{errors.firstname.message}</p>
                }
                <div>
                    <label className='block mb-1'>Last Name</label>
                    <input {...register("lastname", { required: "Hey Buddy please enter your Last Name" })} type="text" placeholder="Enter your Last Name" className={`w-full p-2 rounded-md border ${errors.lastname ? "border-red-500" : "border-zinc-300"}`} />
                </div>
                {
                    errors.lastname && <p className='text-red-400 mb-4'>{errors.lastname.message}</p>
                }
                <div>
                    <label className='block mb-1'>E-mail</label>
                    <input {...register("emailtxt", { required: "Hey Buddy please enter your E-mail", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Enter Proper E-mail" } })} type="email" placeholder="Enter your E-mail" className={`w-full p-2 rounded-md border ${errors.emailtxt ? "border-red-500" : "border-zinc-300"}`} />
                </div>
                {
                    errors.emailtxt && <p className='text-red-400 mb-4'>{errors.emailtxt.message}</p>
                }
                <div>
                    <label className='block mb-1'>Password</label>
                    <input {...register("passwordtxt", { required: "Hey Buddy please enter your Password", minLength: { value: 8, message: "Password must be at least 8 characters long" }, maxLength: { value: 10, message: "Password must be less than 10 chars" } })} type="password" placeholder="Enter your Password" className={`w-full p-2 rounded-md border ${errors.passwordtxt ? "border-red-500" : "border-zinc-300"}`} />
                </div>

                {
                    errors.passwordtxt && <p className='text-red-400 mb-4'>{errors.passwordtxt.message}</p>
                }
                <div>
                    <label className='block mb-1'>Age</label>
                    <input {...register("agetxt", { required: "Hey Buddy please enter your Age", min: { value: 18, message: "You must be at least 18 years old" }, max: { value: 100, message: "You must be less than 100 years old" } })} type="number" placeholder="Enter your Age" className={`w-full p-2 rounded-md border ${errors.agetxt ? "border-red-500" : "border-zinc-300"}`} />
                </div>

                {
                    errors.agetxt && <p className='text-red-400 mb-4'>{errors.agetxt.message}</p>
                }


                {/* <Input label="E-mail Address" type="email" placeholder="Enter your Email" />
                <Input label="Password" type="password" placeholder="Enter your Password" /> */}
            </div>
            <Button type="submit" text="Sign Up" />
        </form>
    )
}

export default Card
