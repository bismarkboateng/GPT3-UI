import React from 'react'
import './header.css'
import { NavBar, Header_ } from '../../components/imports'

const Header = () => {
  return (
    <div className="gpt3__header-main gradient__bg">
      <NavBar />
      <Header_ />
    </div>
  )
}

export default Header
