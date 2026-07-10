import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cart,
  Checkout,
  Error,
  Homelayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  Singleproduct,
} from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <Singleproduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
