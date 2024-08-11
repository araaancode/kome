import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './admin/app/auth';
import initializeApp from './admin/app/init';
import axios from "axios"
import { data } from "autoprefixer"

// landing pages 
import IndexLayout from "./landing/components/Layout"
import IndexPage from "./landing/pages/IndexPage"
import LoginPage from "./landing/pages/LoginPage"
import RegisterPage from "./landing/pages/RegisterPage"
import ProfilePage from "./landing/pages/ProfilePage"
import HousesPage from "./landing/pages/HousesPage"
import HousesFormPage from "./landing/pages/HousesFormPage"
import HousePage from "./landing/pages/HousePage"
import BookingsPage from "./landing/pages/BookingsPage"
import BookingPage from "./landing/pages/BookingPage"
import ProtectedRoute from './landing/routing/ProtectedRoute';
import SearchResultsPage from './landing/pages/SearchResultsPage';
import FavoritesPage from './landing/pages/FavoritesPage';
import BankPage from './landing/pages/BankPage';
import NotificationsPage from './landing/pages/NotificationsPage';
import SupportPage from './landing/pages/SupportPage';


import { UserContextProvider } from "./landing/components/UserContext";

import PublicRoutes from "./landing/routing/publicRoutes"
import PrivateRoutes from "./landing/routing/privateRoutes"


// Importing pages
const Layout = lazy(() => import('./admin/containers/Layout'))
const Login = lazy(() => import('./admin/pages/Login'))
const ForgotPassword = lazy(() => import('./admin/pages/ForgotPassword'))
const Register = lazy(() => import('./admin/pages/Register'))
// const Documentation = lazy(() => import('./admin/pages/Documentation'))

// drivers pages
const DriversLayout = lazy(() => import('./drivers/containers/Layout'))
const DriversLogin = lazy(() => import('./drivers/pages/Login'))
const DriversForgotPassword = lazy(() => import('./drivers/pages/ForgotPassword'))
const DriversRegister = lazy(() => import('./drivers/pages/Register'))

// owners pages
const OwnersLayout = lazy(() => import('./owners/containers/Layout'))
const OwnersLogin = lazy(() => import('./owners/pages/Login'))
const OwnersForgotPassword = lazy(() => import('./owners/pages/ForgotPassword'))
const OwnersRegister = lazy(() => import('./owners/pages/Register'))

// cooks pages
const CooksLayout = lazy(() => import('./cooks/containers/Layout'))
const CooksLogin = lazy(() => import('./cooks/pages/Login'))
const CooksForgotPassword = lazy(() => import('./cooks/pages/ForgotPassword'))
const CooksRegister = lazy(() => import('./cooks/pages/Register'))




// Initializing different libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <>
        <Router>
          <Routes>

            {/* landing page */}
            <Route path="/" element={<IndexLayout />}>
              <Route index element={<IndexPage />} />
              <Route element={<PublicRoutes />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/account/places" element={<HousesPage />} />
                <Route path="/account/places/new" element={<HousesFormPage />} />
                <Route path="/account/places/:id" element={<HousesFormPage />} />
                <Route path="/house/:id" element={<HousePage />} />
                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="/bookings/:id" element={<BookingPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/search-houses' element={<SearchResultsPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='/bank' element={<BankPage />} />
                <Route path='/notifications' element={<NotificationsPage />} />
                <Route path='/support' element={<SupportPage />} />
              </Route>
            </Route>

            {/* admins routes*/}
            <Route path="/admins/login" element={<Login />} />
            <Route path="/admins/forgot-password" element={<ForgotPassword />} />
            <Route path="/admins/register" element={<Register />} />
            <Route path="/admins/*" element={<Layout />} />
            <Route path="/admins" element={<Navigate to={token ? "/admins/welcome" : "/admins/login"} replace />} />



            {/* drivers pages */}
            <Route path="/drivers" element={<Navigate to={token ? "/drivers/welcome" : "/drivers/login"} replace />} />
            <Route path="/drivers/*" element={<DriversLayout />} />
            <Route path="/drivers/login" element={<DriversLogin />} />
            <Route path="/drivers/forgot-password" element={<DriversForgotPassword />} />
            <Route path="/drivers/register" element={<DriversRegister />} />

            {/* owners pages */}
            {/* <Route path="/owners" element={<Navigate to={token ? "/owners/welcome" : "/owners/login"} replace />} />
            <Route path="/owners/*" element={<OwnersLayout />} />
            <Route path="/owners/login" element={<OwnersLogin />} />
            <Route path="/owners/forgot-password" element={<OwnersForgotPassword />} />
            <Route path="/owners/register" element={<OwnersRegister />} /> */}

            {/* owners pages */}
            {/* <Route path="/cooks" element={<Navigate to={token ? "/cooks/welcome" : "/cooks/login"} replace />} />
            <Route path="/cooks/*" element={<CooksLayout />} />
            <Route path="/cooks/login" element={<CooksLogin />} />
            <Route path="/cooks/forgot-password" element={<CooksForgotPassword />} />
            <Route path="/cooks/register" element={<CooksRegister />} /> */}

          </Routes>
        </Router>
      </>
    </>
  )
}

export default App
