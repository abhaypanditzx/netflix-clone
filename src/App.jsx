import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Auth from './pages/auth/Auth.jsx';
const App = () => {
  return (
    <div className='bg-black'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
