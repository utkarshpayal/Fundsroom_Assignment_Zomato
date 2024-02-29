import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowCase from './pages/ShowCase/ShowCase'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import User from './pages/User/User'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
