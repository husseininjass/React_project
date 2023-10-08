import React from 'react';
import './hom.css';
import './animate.css';
// import './bootstrap.min.css';
import './font-awesome.min.css';
import './glass-case.css';
import './magnific-popup.css';
// import './owl.carousel.css';
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  return (



    <div>
      <header className="header transition">
        <div className="container position-r">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 align-flax">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img alt="log" src="/images/logo.png" className="transition" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-6 position-i">
              <div className="transition">
                <div className="menu">
                  <ul>
                    <li>
                      <a href="/">HOME</a>
                    </li>
                    <li>
                      <a href="/Products">PRODUCTS</a>
                    </li>
                    <li>
                      <a href="/Offers">OFFERS</a>
                    </li>
                    <li>
                      <a href="index.html">ABOUT US</a>
                    </li>


                    <li>
                      <a href="contact.html">CONTACT US</a>
                    </li>
                    <li>
                      <a href="login">LOGIN</a>
                    </li>
                    <li>
                      <a href="register">REGISTER</a>
                    </li>
                    <li>
                      <a href="contact.html"> <FontAwesomeIcon icon={faUser} className="fa-2x" style={{ color: '#020203' }} />  </a>
                    </li>
                    <li>
                      <a href="contact.html">[  ] <FontAwesomeIcon icon={faCartShopping} className="fa-2x" style={{ color: '#020203' }} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>








    </div>

















  )
};
export default Header;