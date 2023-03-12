import React from 'react'
import './possibility.css'
import Extract from '../Extract/Extract';


const Possibility = () => {
  return (
    <div className="gpt3__possibility section_margin">

      <div className="gpt3__possibility-title_text">
          <div className="gpt3__possibility-title">
            <Extract title="What is GPT3" />
          </div>

          <div className="gpt3__possibility-text">
            <p>
            simply dummy text of the printing and typesetting industry.<br></br>
            Lorem Ipsum has been the industry's standard dummy text ever<br></br>
            since the 1500s, when an unknown printer took a
            </p>
          </div>
      </div>


      <div className="gpt3__possibility-beyond">
        <h1 className="gradient__text"> 
         The possibilities are beyond your <br></br>imagination
        </h1>

        <p className="gradient__text"> 
        Explore The library
        </p>
      </div>


      <div className="gpt3__possibility-smallExtract">
        <Extract title="Chatbots" text=" simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a" />

        <Extract title="Knowledge" text=" simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a" />

        <Extract title="Education" text=" simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a" />
      </div>

    </div>
  )
}

export default Possibility