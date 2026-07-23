import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  const result = response.data.data
  return { result: result }
}

const Singleproduct = () => {
  const { result } = useLoaderData()
  const { image, title, price, description, colors, company } =
    result.attributes
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const handleAmount = (e) => [setAmount(parseInt(e.target.value))]
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      <div className='mt-6 grid lg:grid-cols-2 gap-y-8 lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        <div className=''>
          <h1 className='text-3xl font-bold capitalize'>{title} </h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>${price / 100}</p>
          <p className='mt-4'>{description}</p>
          <div className='mt-6'>
            <h4 className='text-md font-md tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    type='button'
                    key={color}
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label htmlFor='' className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              id='amount'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md'>Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Singleproduct
