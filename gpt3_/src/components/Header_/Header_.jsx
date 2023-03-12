import React from 'react'
import './header.css'
import OpenAi from '../../assets/ai.png'
import People from '../../assets/people.png'


const Header_ = () => {
  return (
    <div className="gpt3__header">

      <div className="gpt3__header-groupA">

        <div className="gpt3__header-text">
          <h1 className="gradient__text">
          Let's Build Something 
          amazing with GPT-3 OpenAI</h1>
        </div>

        <div className="gpt3__header-content">
          simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the
        </div>

        <div className="gpt3__header-input">
          <input type="text" placeholder="Your username" ></input>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-people"> 
           <img src={People} alt="People Image" />
           <p>
           1600 people requested access a visit in last 24 hours
           </p>
        </div>

      </div>


      <div className="gpt3__header-groupB">
        <img src={OpenAi} alt="OpenAi Image" />
      </div>

    </div>
  )
}

export default Header_
