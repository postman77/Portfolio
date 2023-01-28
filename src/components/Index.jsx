import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Index = () => {

  const [nav, setHome] = useState(false)
    const handleClick = () => setHome(!nav)

  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900'>
        
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-400'>Hi my name is</p>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Mahamed Ali</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-yellow-400'>I'm a Front-End Developer</h2>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400'>
                <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                    View Works
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Index