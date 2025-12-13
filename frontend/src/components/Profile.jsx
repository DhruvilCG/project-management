import React from 'react'
import { ToastContainer } from 'react-toastify'

const Profile = () => {
  return (
    <div className=' min-h-screen bg-gray-50'>
        <ToastContainer position='top-center' autoClose={3000} />
        <div className='max-w-4xl mx-auto p-6'>
            <button onClick={()=>navigate(-1)}>

            </button>
        </div>
    </div>
  )
}

export default Profile