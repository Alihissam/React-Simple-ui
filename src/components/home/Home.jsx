import React from 'react'
import './home.css'
import team from '../../images/team.svg';
import About from '../About/About';
import Products from '../Products/Products';
import Services from '../Ourservices/Services';


const Home = () => {
    return (
        <>
            <section className="section-1">
                <div className="container col-lg-10" >
                    <div className="row">
                        <div className="col-lg-6 order-1 order-2">
                            <div className="content_wrapper">
                                <div className="content_heading">
                                    <span className="title_marketing">Marketing Agency</span>
                                    <h1 className="main_heading">Lead Generation Specialist for online Businesses</h1>
                                    <p className="description">
                                        We help Business Owners increase their revenue. Our team of Unique Specialist can help you achieve your businesses goals.
                                    </p>
                                    <button type="button" className="btn btn-primary get-started" style={{ margin: "6px 0" }}>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-1">
                            <div className="image__wrapper ">
                                <img src={team} alt="..." className="img-fluid social-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="/about">
                <About />
            </div>
            <div id="/services">
                <Services />
            </div>
            <div id="/products">
                <Products />
            </div>

        </>
    )
}

export default Home
