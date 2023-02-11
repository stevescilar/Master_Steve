import React from 'react'
import "./qualifications.css";


const Qualifications = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">The Path i have taken</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <i className="uil uil-graduation-cap qualification__active qualification__icon">Education</i>{ " " }
                <i className="uil uil-briefcase-alt qualification__icon">Work Experience</i>{ " " }
            </div>
        </div>

        {/* qualification sections */}
        <div className="qualification__sections">
            <div className="qualification__content">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Trainer</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Tutorial Fellow</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">UX/UI Expert</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2016-2018
                    </div>

                    
                </div>
            </div>

            <div className="qualification__content">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Trainer</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Tutorial Fellow</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2014-2017
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">UX/UI Expert</h3>
                        <span className="qualification__subtitle">JKUAT</span>
                    </div>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>2016-2018
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications