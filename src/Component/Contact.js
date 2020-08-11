import React from 'react';

function Contact() {
    return(
        <div className="main-section">
                <div className="container">
                    <div className="row xl-gutter clearfix">
                        <div className="col lg-6 m-12 sm-12">
                            <h3>Connect with us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        </div>
                        <div className="col lg-6 m-12 sm-12">
                            <h3>Send a Request</h3>
                            <div className="form">
                                <form className="contact-form" data-name="Email-form" id="email-form">
                                    <label className="field-label" for="name">Name:</label>
                                    <input className="contact-field input" data-name="Name" id="name" maxLength="256" placeholder="Enter your name" type="text"></input>
                                    <label className="field-label" for="email">Email Address</label>
                                    <input className="contact-field input" data-name="Email" id="email" maxLength="256" placeholder="Enter your email address" type="text"></input>
                                    <label className="field-label" for="message">Message:</label>
                                    <textarea className="contact-field input message" data-name="Message" id="message" maxLength="5000" placeholder="Say what you need say..." type="text"></textarea>
                                    <input className="btn w-btn" date-wait="Please wait..." type="submit" value="Submit"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}
export default Contact;