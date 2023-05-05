import React from 'react'
import coding from '../photos/coding.png'

const skill = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-cyan-50 p-12 h-auto w-auto my-6 drop-shadow-xl border rounded flex flex-col items-center text-center '>
           <img className='h-20' src={coding} alt="" />
           <div className='mt-6'>
                <h1 className='text-3xl text-cyan-600 font-bold leading-6'>Frontend Developer</h1>
                <p className='mt-3 font-normal'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
           </div>

           <div className='mt-4'>
                <span className='font-medium text-cyan-500'>Technologies I use :</span>
                <p> HTML, CSS, Java-script, React, Tailwind</p>
           </div>


           <div className='mt-6'>
                <span className='font-medium text-cyan-500'>Dev tools : </span>
                <ul className='mt'>
                  <li>Vs Code</li>
                  <li>Bulma</li>
                  <li>Bootstrap</li>
                  <li>Git & Github</li>
                  <li>Hyper</li>
                </ul>

           </div>

          
         
      </div>
    </div>
  )
}

export default skill