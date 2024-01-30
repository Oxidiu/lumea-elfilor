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
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/api/products/:id' element={<ProductScreen/>}/>
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
