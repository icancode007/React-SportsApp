import React from 'react';
const Footer = ()=>(
  <div id="footer">
    <div className="container">
      <ul className="socialfooter d-flex justify-content-center">
        <li className="p-2">
          <a href="https://github.com/icancode007">
            <img src={require('../../styles/Github.svg')} alt='Img not found'/>
          </a>
        </li>
        <li className="p-2">
          <a href="https://www.linkedin.com/in/devfrguez/">
            <img src={require('../../styles/Linkedin.svg')} alt='Img not found'/>
          </a>
        </li>
        <li className="p-2">
          <a href="https://www.reddit.com/user/Frodriguez26/">
            <img src={require('../../styles/Reddit.svg')} alt='Img not found'/>
          </a>
        </li>
        <li className="p-2">
          <a href="https://twitter.com/JozeRozay">
            <img src={require('../../styles/Twitter.svg')} alt='Img not found'/>
          </a>
        </li>
      </ul>
    </div>
    <div className= "insidefooter">
      <div className="insidefooter d-flex justify-content-center">
        <p>
          <small>
            A Basketball FanBased site
          </small>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          <small> @JoseInc | All Rights Reserved </small>
        </p>
      </div>
    </div>
  </div>
)
export default Footer;
