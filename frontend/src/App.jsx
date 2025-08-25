import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home"
import SignUp from "../src/pages/SignUp"
import Login from "../src/pages/Login"
import Settings from "../src/pages/Settings"
import Profile from "../src/pages/Profile"
import { useAuthStore } from './store/useAuthStore'
import { Loader } from "lucide-react"
import {Toaster} from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path='/signup' element={!authUser ? <SignUp /> : <Navigate to="/" />}></Route>
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/" />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />}></Route>
      </Routes>

      <Toaster></Toaster>
    </div>
  )
}

export default App