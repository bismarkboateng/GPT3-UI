import React from 'react'
import './future.css';
import Extract from '../Extract/Extract';


const featuresData = [
  {
    title: "Improving end distrusts instantly", 
    text: "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer"
  },

  {
    title: "Become the tended active", 
    text: "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer"
  },

  {
    title: "Message or am nothing", 
    text: "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer"
  },
  {
    title: "Really boy law county", 
    text: "simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer"
  }
]


const Future = () => {
  return (
    <div className="gpt3__future">
        <div className="gpt3__future-text">
          <h1 className="gradient__text">
            The Future is Now and You Just Need<br />
            To Realize It. Step into Future Today & <br />
            Make it Happen.
          </h1>
          <p className="gradient__text">Request Early Access</p>
        </div>

        <div className="gpt3__future-blog">
            {/* {
            futuresData.map((item) => {
              <Extract title={item.title} text={item.text} />
            })} */}

            {featuresData.map((item, index) => (
            <Extract title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
  );
}

export default Future
