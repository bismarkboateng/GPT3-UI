import React from 'react';
import './extract.css';


const Extract = ( {title , text }) => {
    return (
      <div className="gpt3__extract">

        <div />
        <p className="gpt3__extract-title"> { title } </p>
        <p className="gpt3__extract-text"> { text } </p>


      </div>
    );
  }
  

export default Extract;