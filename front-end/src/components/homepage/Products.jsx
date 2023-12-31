import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import axios from 'axios';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Make an Axios GET request to your PHP API
        axios.get('http://localhost/React_project/back-end/homepage/products.php')
            .then((response) => {
                // Handle the response and set the products state
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(products);

    return (

        <div>
            <Header />

            <section className="newsletter featured pt-100">
                <div className="container">
                    <div className="newsletter-inner text-center ptb-100">
                        <div className="row mb-25 justify-content-center">
                            <div className="hading">
                                <h2 style={{ textDecoration: 'underline', color: 'red' }} className="hading-title">OUR <span >PRODUCTS</span></h2>
                            </div>
                        </div>
                        <br /> <br />
                        <div className="tab-content">
                            <div role="tabpanel" className="row tab-pane fade active show">
                           


                                {products.map((product, index) => (


                                    <div className="featured-product mb-25" >
                                        {/* Product image */}
                                        <div className="product-img transition mb-15">
                                            <a href="Productdetails"> 
                                           
                                                <img src={product.Image} alt={product.ProductName} className="transition" />
                                            </a>
                                            {/* New label */}
                                            <div className="new-label">
                                                <span className="text-uppercase">New</span>
                                            </div>
                                            {/* Sale label */}
                                            <div className="sale-label">
                                                <span className="text-uppercase">Sale</span>
                                            </div>
                                            {/* Quick view */}
                                            <div className="product-details-btn text-uppercase text-center transition">
                                                <a href="Productdetails" className="quick-popup">View Product</a>
                                            </div>
                                        </div>
                                        {/* Product description */}
                                        <div className="product-desc">
                                            <a href="Productdetails" className="product-name text-uppercase">{product.ProductName}</a>
                                            <span className="product-pricce">${product.Price}</span>
                                        </div>
                                    </div>

                                ))}



                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />

        </div>
    );
};

export default Products;