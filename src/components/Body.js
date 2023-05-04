import React from 'react'
import personalImage from '../photos/myphoto.png'


const Body = () => {
  return (
    <div className='p-12  mt-32 flex flex-col md:items-center'>
        <h1 className="text-5xl text-center font-bold">Designer and Frontend Developer</h1>
        <h3 className="text-lg mt-8 text-center">I design and code beautifully simple things, and I love what I do.</h3>
        <img className='h-60 w-60 rounded-full mt-20' src={personalImage} alt="" />
     
    </div>
 

  )

}

export default Body