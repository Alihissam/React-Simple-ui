import React from 'react'
import './services.css'
import { GiStoneBlock } from 'react-icons/gi';
import { GiGoldBar } from 'react-icons/gi';
import { GiCutDiamond } from 'react-icons/gi';

const Services = () => {
    return (
        <div id="services">
            <section className="services__section" id="services">
                <div className="container col-lg-10">
                    <div className="row">
                        <div className="service__wrapper">
                            <h2 className="main__heading">
                                Our Services
                            </h2>
                        </div>
                        <div className="box_container">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <div className="box">
                                        <div className="box_logo">
                                            <GiStoneBlock className="stone" />
                                            <h3 className="heading">
                                                Stater Pack
                                            </h3>
                                            <h3 className="price">$99.99</h3>
                                            <span className="car_title">Per month</span>
                                            <br />
                                            <span className="car_title">100 New Users</span>
                                            <br />
                                            <span className="car_title">Retergating analytical</span>
                                            <br />
                                            <div className="box_button">
                                                <button type="button" className="btn btn-primary choose_button">Choose Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="box">
                                        <div className="box_logo">
                                            <GiGoldBar className="stone" />
                                            <h3 className="heading">
                                                Gold Rush
                                            </h3>
                                            <h3 className="price">$299.99</h3>
                                            <span className="car_title">Per month</span>
                                            <br />
                                            <span className="car_title">100 New Users</span>
                                            <br />
                                            <span className="car_title">Retergating analytical</span>
                                            <br />
                                            <div className="box_button">
                                                <button type="button" className="btn btn-primary choose_button">Choose Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="box">
                                        <div className="box_logo">
                                            <GiCutDiamond className="stone" />
                                            <h3 className="heading">
                                                Diamond King
                                            </h3>
                                            <h3 className="price">$999.99</h3>
                                            <span className="car_title">Per month</span>
                                            <br />
                                            <span className="car_title">100 New Users</span>
                                            <br />
                                            <span className="car_title">Retergating analytical</span>
                                            <br />
                                            <div className="box_button">
                                                <button type="button" className="btn btn-primary choose_button">Choose Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
