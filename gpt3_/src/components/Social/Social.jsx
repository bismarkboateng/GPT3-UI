import React from 'react'
import './social.css'
import { slack, google, atlassian, dropbox, shopify } from './import'

const Social = () => {
  return (
    <div className="gpt3__socials">
      <div className="gpt3__socials-image">
        <img src={slack} alt="slack" />
      </div>

      <div className="gpt3__socials-image">
        <img src={google} alt="google" />
      </div>

      <div className="gpt3__socials-image">
        <img src={atlassian} alt="atlassian" />
      </div>

      <div className="gpt3__socials-image">
        <img src={dropbox} alt="dropbox" />
      </div>

      <div className="gpt3__socials-image">
        <img src={shopify} alt="shopify" />
      </div>
      
    </div>
  )
}

export default Social
