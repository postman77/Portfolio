import React from 'react'

const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/7b1f2eb7-5b96-47b4-94e3-3e735d47217c" className='flex flex-col max-w-[800px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Have a Coffee Chat</button>
          </form>
      </div>
    )
  }

export default Contact