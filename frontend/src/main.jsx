import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'

// import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './store.js'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import LoginScreen  from './screens/LoginScreen.jsx'
import RegisterScreen  from './screens/RegisterScreen.jsx'
import ShippingScreen from './screens/ShippingScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/api/products/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path="/shipping" element={<ShippingScreen/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
