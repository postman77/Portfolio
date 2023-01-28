import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mahamed, Please explore my world.</p>
            </div>
            <div>
            <p>From the moment I created my first website on Wordpress, I knew I was hooked
              into the world of programming. I don't view coding as a job, but to engage in
              challenges to learn and improve my skills in creating marvelous web application and
              software. What started as a simple website has exploded into a passion that only
              grow as years go by.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About