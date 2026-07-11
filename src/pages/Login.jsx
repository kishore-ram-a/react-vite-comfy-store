import React from 'react'
import { Form, Link } from 'react-router-dom'
import { Forms, SubmitBtn } from '../components/index'
const Login = () => {
  return (
    <section className='min-h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg--base-100 shadow-lg flex flex-col-gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <Forms
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@gmail.com'
        />
        <Forms
          type='password'
          label='password'
          name='password'
          defaultValue='******'
        />
        <SubmitBtn text='login' />
        <p className='text-center mt-3'>
          Not a member?{' '}
          <Link to='/register' className='text-primary pl-1'>
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
