import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";

import './index.css'
import Main from './Component/Main';
import Books from './Component/Books';
import Home from './Component/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import AddBooks from './Component/AddBooks';
import Cart from './Component/Cart';
import PrivateRoutes from './Route/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/addBooks',
        element: <PrivateRoutes>
          <AddBooks></AddBooks>
        </PrivateRoutes>
      },
      {
        path: '/carts',
        element: <PrivateRoutes>
          <Cart></Cart>
        </PrivateRoutes>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
)
