import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Route/Route'
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <div>Home Page</div>
//   },
//   {
//     path : '/products',
//     element : <div>Products element</div>
//   },
//   {
//     path : '/about',
//     element : <div>About element</div>
//   },
// ])

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <MainLayout></MainLayout>,
//     children : [
//       {
//         path : '/',
//         element : <Home></Home>
//       },
//       {
//         path : '/products',
//         element : <Products></Products>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
