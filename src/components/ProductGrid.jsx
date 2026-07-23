import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ProductGrid = () => {
  const { products } = useLoaderData()
  return (
    <>
      <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((item) => {
          const { title, price, image } = item.attributes
          return (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className='card w-full shadow-xl'
            >
              <figure className='px-4 pt-4'>
                <img
                  src={image}
                  alt={title}
                  className='rounded-xl h-64 w-full object-cover'
                />
              </figure>
              <div className='card-body item-center text-center'>
                <h2 className='cart-title capitalize tracking-wider'>
                  {title}
                </h2>
                <span className='text-secondary'>${price / 100}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ProductGrid
