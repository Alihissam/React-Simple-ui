import React from 'react'
import './products.css'
import tear from '../../images/tear.svg';

const Products = () => {
    return (
        <div id="products">
            <section className="products_section" id="products">
                <div className="container col-lg-10" >
                    <div className="row">
                        <div className="col-lg-6 order-1 order-2">
                            <div className="content_wrapper">
                                <div className="content">
                                    <span className="title">Marketing Agency</span>
                                    <h1 className="main_heading">Lead Generation Specialist for online Businesses</h1>
                                    <p className="description">
                                        We help Business Owners increase their revenue. Our team of Unique Specialist can help you achieve your businesses goals.
                                    </p>
                                    <button type="button" className="btn btn-primary get-started" >Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-1">
                            <div className="image__wrapper ">
                                <img src={tear} alt="..." className="img-fluid social-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
