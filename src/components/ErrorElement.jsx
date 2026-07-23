import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorElement = () => {
  const error = useRouteError()
  console.log(error.error)
  return <div className='items-center text-6xl '>There was an error...</div>
}

export default ErrorElement
