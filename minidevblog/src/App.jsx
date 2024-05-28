import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthetication } from './hooks/userAuthentication'
import loading from './assets/Loading.gif'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthetication()

  const loadingUser = user == undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <div className="container load">
      <img src={loading} alt='Gif Loading User' Wigth="120px" height="120" />
    </div>
  }
  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
