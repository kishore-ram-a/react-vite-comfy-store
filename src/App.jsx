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
import { ErrorElement } from './components'
import { loader as Landingloader } from './pages/Landing.jsx'
import { loader as singleProductLoader } from './pages/Singleproduct.jsx'
import { loader as productLoader } from './pages/Products.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: Landingloader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },
      {
        path: 'products/:id',
        element: <Singleproduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
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
