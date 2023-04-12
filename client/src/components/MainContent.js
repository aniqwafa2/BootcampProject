import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages'

const MainContent = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='' element={<HomePage/>}></Route>
      </Routes>
    </div>
  )
}

export default MainContent