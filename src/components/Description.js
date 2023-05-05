import React from 'react'
import workspace from '../photos/workspace.png';

const Description = () => {
  return (
  <div className='flex flex-col items-center bg-purple-300'>
    <img className="my-20 px-6 sm:h-80 sm:w-6/12" src={workspace} alt="" />
    <div className='p-8 text-center'>
    <h1 className='text-3xl font-bold mb-6'>Hi, I am Kunal. Nice to meet you. </h1>
    <span className='text-lg'>Welcome everyone to my website! As a fresher React JS developer, I have created this site to showcase my skills and share my passion for web development with you. With React JS, I have created a dynamic and interactive user interface that will allow you to easily navigate and engage with the content on this site. Whether you are a fellow developer looking to collaborate or someone interested in learning more about web development, I hope you find this site informative and enjoyable to explore. Thank you for visiting, and I look forward to connecting with you!</span>

    </div>
   
  </div>
  )
}

export default Description