import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <div className='bg-black'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
