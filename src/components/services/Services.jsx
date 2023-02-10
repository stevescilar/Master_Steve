import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    // implementing the toggle modal function(
    const [toggleState, setToggleState ] =useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Creative Web <br/> Dev </h3>
           

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title"> Creative Web Developer</h3>
                        <p className="services__modal-description">As a web developer with over 7 years of experience, I offer a wide range of services to help businesses and organizations achieve their online goals. My expertise covers all aspects of web development, from conceptualization and design to deployment and maintenance.  </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Website Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Wordpress Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Social Media Integration
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Search Engine Optimization - SEO
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web Solutions
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">UI/UX <br/> Designer</h3>
           

                <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon">
                </i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UX/UI Designer</h3>
                        <p className="services__modal-description">As As a UX/UI designer with 3 years of experience, I have a passion for creating intuitive, user-centered designs that enhance the user experience. I have a deep understanding of design principles and methodologies and use them to create elegant and effective designs for web and mobile applications.  </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User research and analysis
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Wireframes, prototypes, and high-fidelity interfaces designing
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Intuitive User interface Development
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Brand Creation
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Graphic Design
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">Systems <br/>Developer</h3>
           

                <span  onClick={() => toggleTab(3)} className="services__button">View More<i className="uil uil-arrow-right services__button-icon">
                </i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Systems Developer</h3>
                        <p className="services__modal-description">As With 3 years of experience as a systems developer, I specialize in designing, implementing, and maintaining custom software solutions for businesses and organizations.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Designing and implementing custom software solutions
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Building scalable and secure systems to handle high traffic and support business growth
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Developing custom integrations with third-party services to ensure seamless operation
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I write clean and maintainable code that follows best practices and industry standards
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                I do code reviews to ensure high-quality software development standards
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services