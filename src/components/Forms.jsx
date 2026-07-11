import React from 'react'

const Forms = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className='fieldset mb-4'>
      <legend className='fieldset-legend'>{label}</legend>
      <input
        name={name}
        type={type}
        className='input'
        placeholder={defaultValue}
      />
    </fieldset>
  )
}

export default Forms
