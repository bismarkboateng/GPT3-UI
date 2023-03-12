
import React from 'react'
import './App.css'
import { Access, Article, Explore, Header  } from './containers/imports'
import  Footer  from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Explore />
      <Access />
      <Article /> 
      <Footer />
    </div>
  )
}

export default App
