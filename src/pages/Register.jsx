import React from 'react'
import { Forms, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-6 bg-base-100 shadow-lg flex flex-col gap-y-2'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <Forms
          type='text'
          label='username'
          name='username'
          defaultValue='username'
        />
        <Forms
          type='email'
          label='email'
          name='email'
          defaultValue='test@gmail.com'
        />
        <Forms
          type='password'
          label='password'
          name='password'
          defaultValue='******'
        />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>
        <p className='text-center mt-3'>
          Already a member?{' '}
          <Link to='/login' className='text-primary pl-1'>
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
