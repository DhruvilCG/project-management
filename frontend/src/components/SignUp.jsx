import axios from 'axios';
import { Lock, Mail, User, UserPlus } from 'lucide-react'
import React from 'react'
import { useState } from 'react';

const API_URL = 'https://project-management-backend-1-qk79.onrender.com';
const INITIAL_FORM = {name: "" , email: "" , password: ""}
const FIELDS = [
    {name: "name" , type: "text" , placeholder: "Full Name" , icon: User} ,
    {name: "email" , type: "email" , placeholder: "Email" , icon: Mail} ,
    {name: "password" , type: "password" , placeholder: "Password" , icon: Lock}  
]

const SignUp = ({onSwitchMode}) => {

    const [formData , setFormData] = useState(INITIAL_FORM) ;
    const [loading , setLoading] = useState(false) ;
    const [message , setMessage] = useState({text: "" , type:""}) ;
    const handleSubmit = async(e) => {
        e.preventDefault() ;
        setLoading(true) ;
        setMessage({text: "" , type: ""}) ;

        try {
            const {data} = await axios.post(`${API_URL}/api/user/register` , formData) ;
            console.log ("Signup Successfull" , data) ;
            setMessage({text: "Registeration successful! You can now log in." , type: "success"}) ;
            setFormData(INITIAL_FORM)
        } catch (err) {
            console.error("Signup error: " , err) ;
            setMessage({text: err.response?.data?.message || "An error occoured. Please try again later." , type: "error"}) ;
        } finally {
            setLoading(false) ;
        }
    }

  return (
    <div className='max-w-md w-full bg-white shadow-lg border border-amber-100 rounded-xl p-8'>
        <div className='mb-6 text-center'>
            <div className='w-16 h-16 bg-amber-500 rounded-full mx-auto flex items-center justify-center mb-4'>
                <UserPlus className='w-8 h-8 text-white' />
            </div>
            <h2 className='text-2xl font-bold text-gray-800'>
                Create Account
            </h2>
            <p className='text-gray-500 text-sm mt-1'>Join TaskFlow to manage your tasks</p>
        </div>

        {message.text && (
            <div className={message.type === 'success' ? 'bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4 border border-gray-100' : 'bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100'}>
                {message.text}
            </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
            {FIELDS.map(({name , type , placeholder , icon: Icon}) => (
                <div key={name} className='flex items-center border border-amber-100 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-amber-500'>
                    <Icon className='text-amber-500 w-5 h-5 mr-2' />
                    <input type={type} placeholder={placeholder} value={formData[name]} onChange={(e) => setFormData({...formData , [name]:e.target.value})} className='w-full focus:outline-none text-sm text-gray-700 ' required />
                </div>
            ))}

            <button type='submit' className='w-full flex items-center justify-center gap-2 bg-amber-500 text-white font-medium py-2.5 rounded-lg transition-all hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed shadow-md' disabled={loading}>
                {loading ? "Signing Up..." : <><UserPlus className='w-4 h-4' />Sign Up</>}
            </button>
        </form>

        <p className='text-center text-sm text-gray-600 mt-6'>
            Already have an account ?{' '}
            <button onClick={onSwitchMode} className='text-amber-600 hover:text-amber-700 hover:underline font-medium transition-colors'>
                Login
            </button>
        </p>
    </div>
  )
}

export default SignUp