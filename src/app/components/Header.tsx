import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50' >
        <Navbar/>
    </header>
  )
}

export default Header
