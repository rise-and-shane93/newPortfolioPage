//Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import context and provider
import { MyContext } from '../../context'

//Import styles
import '../../scss/App.scss';

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'

class Contact extends Component {
    render() {
        return(
            <MyContext.Consumer>
                {(context) => (
                    <section id="contact">
                    {
                        (() => {
                            if (context.state.language === 'es') {
                            return <>
                                <h1>{translationES.contact.title}</h1>
                                <p className="text-center">{translationES.contact.p1}</p>
                                <p className="text-center">{translationES.contact.p2}</p>
                            </>
                            } else {
                            return <>
                                <h1>{translationEN.contact.title}</h1>
                                <p className="text-center">{translationEN.contact.p1}</p>
                                <p className="text-center">{translationEN.contact.p2}</p>
                            </>
                            }
                        })()
                    }
                    <article id="contact-form">
                        <form method="post" action="https://formspree.io/cdtharper@gmail.com">
                        {
                        (() => {
                            if (context.state.language === 'es') {
                            return <>
                                <input className="form-control" type="text" name="contact_name" 
                                id="name" placeholder={translationES.contact.placeholder.name} required/>

                                <input className="form-control" type="email" name="contact_email" id="email" 
                                placeholder={translationES.contact.placeholder.email} required/>

                                <input className="form-control" type="text" name="contact_subject" 
                                id="subject" placeholder = {translationES.contact.placeholder.sub} required/>

                                <textarea className="form-control" type="text" name="contact_message" id="message" 
                                placeholder={translationES.contact.placeholder.msg} rows="7" required></textarea>

                                <div className="checkbox"><input type="checkbox" name="contact_checkbox" value="privacy-policy" required />
                                <p>{translationES.contact.privacy.p}<Link to="/privacy-policy" className="privacyPolicyLink">{translationES.contact.privacy.a}</Link>.</p></div>

                                <button type="submit" name="contact_form_submit" 
                                className="form-button">{translationES.contact.placeholder.btn}</button>
                            </>
                            } else {
                            return <>
                                <input className="form-control" type="text" name="contact_name" 
                                id="name" placeholder={translationEN.contact.placeholder.name} required/>

                                <input className="form-control" type="email" name="contact_email" id="email" 
                                placeholder={translationEN.contact.placeholder.email} required/>

                                <input className="form-control" type="text" name="contact_subject" 
                                id="subject" placeholder = {translationEN.contact.placeholder.sub} required/>

                                <textarea className="form-control" type="text" name="contact_message" id="message" 
                                placeholder={translationEN.contact.placeholder.msg} rows="7" required></textarea>

                                <div className="checkbox"><input type="checkbox" name="contact_checkbox" value="privacy-policy" required />
                                <p>{translationEN.contact.privacy.p}<Link to="/privacy-policy" className="privacyPolicyLink">{translationEN.contact.privacy.a}</Link>.</p></div>

                                <button type="submit" name="contact_form_submit" 
                                className="form-button">{translationEN.contact.placeholder.btn}</button>
                            </>
                            }
                        })()
                        }
                        </form>
                    </article>
                    </section>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Contact;