import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-6'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        {/* Centered container with proper DaisyUI badge/box alignment */}
        <div className='stats bg-primary shadow'>
          <div className='stat flex items-center justify-center px-6 py-2'>
            <span className='text-4xl font-bold tracking-widest text-primary-content'>
              comfy
            </span>
          </div>
        </div>
      </div>
      <p className='mx-auto mt-6 max-w-2xl text-lg leading-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum
        eveniet consequuntur itaque reiciendis nam error dignissimos? Distinctio
        dolore repellendus et, non, voluptatum corporis minus repudiandae fugit,
        aspernatur dolorum sunt.
      </p>
    </>
  )
}

export default About
