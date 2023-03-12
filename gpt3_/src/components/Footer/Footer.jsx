import React from 'react';
import './footer.css';
import Logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className="gpt3__footer">

      <div className="gpt3__footer-info">
        <div className="gpt3__footer-title">
          <h1 className="gradient__text">
          Do you want to step into the future before others
          </h1>
        </div>

        <div className="gpt3__footer-btn">
          <button type="submit">Request Early Access</button>
        </div>
      </div>


    <div className="gpt3__footer-links">

        <div className="gpt3__footer-logo">
          <img src={Logo} alt="gpt3 Logo" />
          <p>
          Crechterwoord K12 182 DK Alknjkcho, All rights reserved
          </p>
        </div>

        <div className="gpt3__footer-actual__links">
          <h5>Links</h5>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Couters</p>
          <p>Contact</p>
        </div>

      <div className="gpt3__footer-company">
          <h5>Company</h5>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
      </div>


      <div className="gpt3__footer-intouch">
          <h5>Get in touch</h5>
          <p>Crechterwoord K12 182 DK Alknjkcho, All rights reserved</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
      </div>

      <div className="gpt3__footer-copyright">
          <p>
          2021 GPT-3. All rights reserved.
          </p>
      </div>

    </div>
  </div>
  )
}

export default Footer
