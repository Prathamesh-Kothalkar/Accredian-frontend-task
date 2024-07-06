
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login'
import Home from './Component/Home'

import Signup from './Component/Signup'
import { UserContextProvider } from '../context/UserContext';
import Footer from './Component/Footer';
function App() {
  

  return (
    <>
    <UserContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
