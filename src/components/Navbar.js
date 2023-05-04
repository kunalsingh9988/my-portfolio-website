import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='flex  justify-between pt-4 pb-4 bg-zinc-100'>
        <div className='ml-8 cursor-pointer font-bold md:text-2xl '>
            <h1>{props.name}</h1>
        </div>
        <div className='mr-8 '>
         <button className=' p-1 rounded-full outline outline-blue-300 '>Hire me</button>
         <button className='bg-blue-300 p-1 ml-4 rounded-full '>Say Hello</button>
        </div>
    </nav>
  )
}

export default Navbar