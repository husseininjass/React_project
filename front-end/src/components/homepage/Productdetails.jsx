import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Productdetails = () => {
    return (

        <div>
        <Header />

        <section className="product-detail-main pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="align-center mb-md-30">
            <img src="images/product-11.png" alt="product" />
              {/* <ul id="glasscase" className="">
                <li className='insideThisWasThePic'></li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-12">
            <div className="product-detail-in">
              <h2 className="product-item-name text-uppercase">men's harpoon 2 eye boot</h2>
              <div className="price-box">
                <span className="price">$80.00</span> <br />
                <span className="price">$80.00</span>
                <div className="rating-summary-block">
                  <div className="star-rating">
                    <input id="star-5" type="radio" name="rating" value="star-5" />
                    <label htmlFor="star-5" title="5 stars">
                      <FontAwesomeIcon icon={faStar} className="active" />
                    </label>
                    <input id="star-4" type="radio" name="rating" value="star-4" />
                    <label htmlFor="star-4" title="4 stars">
                      <FontAwesomeIcon icon={faStar} className="active" />
                    </label>
                    <input id="star-3" type="radio" name="rating" value="star-3" />
                    <label htmlFor="star-3" title="3 stars">
                      <FontAwesomeIcon icon={faStar} className="active" />
                    </label>
                    <input id="star-2" type="radio" name="rating" value="star-2" />
                    <label htmlFor="star-2" title="2 stars">
                      <FontAwesomeIcon icon={faStar} className="active" />
                    </label>
                    <input id="star-1" type="radio" name="rating" value="star-1" />
                    <label htmlFor="star-1" title="1 star">
                      <FontAwesomeIcon icon={faStar} className="active" />
                    </label>
                  </div>
                  <a href="#product-review" className="scrollTo"><span>1 Review (s)</span></a>
                </div>
                <div className="product-des">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in oluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <ul>
                  <li><i className="fa fa-check"></i> Satisfaction 100% Guaranteed</li>
                  <li><i className="fa fa-check"></i> Free shipping on orders over $99</li>
                  <li><i className="fa fa-check"></i> 14 day easy Return</li>
                </ul>
                <div className="row mt-20">
                  <div className="col-12">
                    
                   
                    
                    <div className="product-action">
                      <ul>
                        <li>
                          <a href="cart.html" className="btn btn-color">
                            <img src="images/shop-bag.png" alt="bag" />
                            <span>add to cart</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



        <Footer />

        </div>
        );
};

export default Productdetails;