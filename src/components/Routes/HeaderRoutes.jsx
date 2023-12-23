import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../../pages/Nav/Nav'
import Styleguide from '../../pages/Styleguide/Styleguide'
import NoPage from '../../pages/NoPage/NoPage'
import Homepage from '../../pages/Home/Homepage'


// header routing
const HeaderRoutes = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>
    </Router>
  )
}

export default HeaderRoutes


