import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import cardProductLoader from './loader/cardProductLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'shop',
        element: <Shop></Shop>,
      },
      {
        path: 'product',
        element: <Product></Product>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cardProductLoader
      }
      
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
