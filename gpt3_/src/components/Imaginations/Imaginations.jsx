import React from 'react'
import './imaginations.css'
import Poss from '../../assets/possibility.png';

const Imaginations = () => {
  return (
    <div className="gpt3__imaginations">

      <div className="gpt3__imaginations-image">
        <img src={Poss} alt="imaginations-logo" />
      </div>

      <div className="gpt3__imaginations-content">
        <p className="gradient__text">Request Early Access to get Started</p>
        <h1 className="gradient__text">The possibilities are beyond our imaginations</h1>
        <p className="gpt3__imaginations-sample"> 
        simply dummy text of the printing and typesetting industry. <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
        when an unknown printer took a
        </p>
      </div>
    </div>
  )
}

export default Imaginations
