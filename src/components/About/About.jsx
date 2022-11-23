import React from 'react'
import './about.css'
import about from '../../images/about.svg';

const About = () => {
    return (
        <div id="about">
            <div className="about_section " id="about">
                <div className="container col-lg-10">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-2">
                            <div className="image__wrapper__section">
                                <img src={about} alt="..." className="img-fluid social" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-1">
                            <div className="content">
                                <div className="content_heading">
                                    <span className="title">Marketing Agency</span>
                                    <h1 className="main_heading">Lead Generation Specialist for online Businesses</h1>
                                    <p className="description" >
                                        We help Business Owners increase their revenue. Our team of Unique Specialist can help you achieve your businesses goals.
                                    </p>
                                    <button type="button" className="btn btn-primary get-started">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
