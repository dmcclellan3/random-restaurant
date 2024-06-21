import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'

const site = import.meta.env.BASE_URL


function Layout() {
  return (
    <>
      <Header />
      <div id='page-content'>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
],)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
