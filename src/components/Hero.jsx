import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center mt-6 sm:items-center sm:ml-6 sm:mt-6'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      {/* Added lg:flex to ensure display flex is active on large screens */}
      <div className='hidden h-112 lg:flex lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                alt={`Hero image ${index + 1}`}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
