import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import { MyContext } from '../../context'

//Import translations
import * as translationES from '../../translations/es';
import * as translationEN from '../../translations/en';

class Footer extends Component {
    render() {
        return(
            <MyContext.Consumer>
            {(context) => (

                <footer>
                    <div className="footer-left">
                        <div className="footer-left-item">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <p>&nbsp;Baltimore, MD</p>
                            
                        </div>
                        <div className="footer-left-item">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <p className="emailAddress">&nbsp;cdtharper@gmail.com</p>
                        </div>
                        <div className="footer-left-item">
                            <div className="icon">
                                <i className="fas fa-file"></i>
                            </div>
                            <p><a href="https://shanecharper.com/ShaneResume.pdf" target="_blank" rel="noopener noreferrer">&nbsp;Resume</a></p>
                        </div>
                        
                        <div className="social-media">
                        <p style={{"textAlign":"center"}}>
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return translationES.footer.social
                                    } else {
                                    return translationEN.footer.social
                                    }
                                })()
                            }
                            </p>
                            <div className="social-media-inner">
                                <a href="https://www.facebook.com/shane.harper.73" 
                                    target="_blank" className="fab fa-facebook-f" rel="noopener noreferrer">
                                </a>
                                <a href="https://medium.com/@cdtharper" 
                                    target="_blank" className="fab fa-medium" rel="noopener noreferrer">
                                </a>
                                <a href="https://www.linkedin.com/in/shane-harper-84390ab7/" 
                                    target="_blank" className="fab fa-linkedin" rel="noopener noreferrer">
                                </a>
                                <a href="https://github.com/rise-and-shane93" 
                                    target="_blank" className="fab fa-github" rel="noopener noreferrer">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        <img src={require("../../images/logo.png")} alt="Shane Harper's logo"/>
                        <p>&copy;2019 {
                        (() => {
                            if (context.state.language === 'es') {
                            return translationES.footer.copy
                            } else {
                            return translationEN.footer.copy
                            }
                        })()
                        }</p>
                    </div>
                    <div className="footer-right">
                        <h2>
                            {
                            (() => {
                                if (context.state.language === 'es') {
                                return translationES.footer.about
                                } else {
                                return translationEN.footer.about
                                }
                            })()
                            }
                        </h2>
                        <p>
                        {
                            (() => {
                                if (context.state.language === 'es') {
                                return translationES.footer.siteInfo
                                } else {
                                return translationEN.footer.siteInfo
                                }
                            })()
                        }
                        </p>
                    </div>
                </footer>
            )}
            </MyContext.Consumer>
        );
    }
}

export default Footer;