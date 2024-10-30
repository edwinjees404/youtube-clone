import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'


const App = () => {

const [sidebar,setSidebar]=useState(true);


  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>

<Route path='/' element={<Home sidebar={sidebar}/>}/>
<Route path='/video/:categoryId/:videoId' element={<Video/>}/>
{/* <Route path='/' element={<Home/>}/>
<Route path='/' element={<Home/>}/> */}

      </Routes>
    </div>
  )
}

export default App

