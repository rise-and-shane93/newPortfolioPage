import React, { Component } from 'react'

// Import context and provider
import { MyContext } from '../../context'

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'

// Import CSS
import '../../app/styles/components/links.css'

class FeaturedProject extends Component {
    render() {
        return(
            <MyContext.Consumer>
                {(context) => (
                    <>
                    <section id="featured-project-intro">
                        {
                            (() => {
                                if (context.state.language === 'es') {
                                return <h1>{translationES.featured.h1}</h1>
                                } else {
                                return <h1>{translationEN.featured.h1}</h1>
                                }
                            })()
                        }
                        <article id="article-intro">
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <div className="case-study-intro">
                                    <h2>{translationES.featured.intro.title}</h2>
                                    <hr className="style14"/>
                                    <p className="case-study-date">{translationES.featured.intro.date}</p>
                                    <p className="text-justify">{translationES.featured.intro.p}</p>
                                    </div>
                                    } else {
                                    return <div className="case-study-intro">
                                    <h2>{translationES.featured.intro.title}</h2>
                                    <p className="case-study-date">{translationEN.featured.intro.date}</p>
                                    <p className="text-justify">{translationEN.featured.intro.p}</p>
                                    </div>
                                    }
                                })()
                            }
                            <img src={require("../../images/jLewSite.jpg")} alt="A screenshot of Jestin Lewis's website on desktop and mobile"/>
                        </article>
                        <article id="paragraph1">
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <div>
                                    <p>{translationES.featured.p1.p}</p>
                                    <ul>
                                        <li>{translationES.featured.p1.li1}</li>
                                        <li>{translationES.featured.p1.li2}</li>
                                        <li>{translationES.featured.p1.li3}</li>
                                        <li>{translationES.featured.p1.li4}</li>
                                    </ul>
                                    </div>
                                    } else {
                                    return <div>
                                    <p>{translationEN.featured.p1.p}</p>
                                    <ul>
                                        <li>{translationEN.featured.p1.li1}</li>
                                        <li>{translationEN.featured.p1.li2}</li>
                                        <li>{translationEN.featured.p1.li3}</li>
                                        <li>{translationEN.featured.p1.li4}</li>
                                    </ul>
                                    </div>
                                    }
                                })()
                            }
                        </article>
                    </section>
                    <section id="article-body">
                        <article id="paragraph2">
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <div>
                                    <p>{translationES.featured.p2.one}</p>
                                    <p>{translationES.featured.p2.two}</p>
                                    </div>
                                    } else {
                                    return <div>
                                    <p>{translationEN.featured.p2.one}</p>
                                    <p>{translationEN.featured.p2.two}</p>
                                    </div>
                                    }
                                })()
                            }
                            <img src={require("../../images/sassToCss.gif")} alt="A gif that shows Sass being compiled to CSS"/>
                        </article>
                        <hr className="style2"/>
                        <article id="paragraph3">
                            <img src={require("../../images/jLewSiteDesk.png")} alt="A screenshot of Jestin Lewis's website on desktop."/>
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <div>
                                    <p>{translationES.featured.p3.one}</p>
                                    <p>{translationES.featured.p3.two}</p>
                                    <p>{translationES.featured.p3.three}</p>
                                    </div>
                                    } else {
                                    return <div>
                                    <p>{translationEN.featured.p3.one}</p>
                                    <p>{translationEN.featured.p3.two}</p>
                                    <p>{translationEN.featured.p3.three}</p>
                                    </div>
                                    }
                                })()
                            }
                            <img src={require("../../images/jLewSitePhone.png")} alt="A screenshot of Jestin Lewis's website on mobile"/>
                        </article>
                    </section>
                    <section id="article-conclusion">
                        <article id="paragraph4">
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <div className="paragraph4-text">
                                    <p>{translationES.featured.p4.one}</p>
                                    <p>{translationES.featured.p4.two}</p>
                                    <p>{translationES.featured.p4.three}</p>
                                    </div>
                                    } else {
                                    return <div className="paragraph4-text">
                                    <p>{translationEN.featured.p4.one}</p>
                                    <p>{translationEN.featured.p4.two}</p>
                                    <p>{translationEN.featured.p4.three}</p>
                                    </div>
                                    }
                                })()
                            }
                            <div className="paragraph4-images">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgXh66GVn3rU3PEHdPWRn8u4yRsdTxry15RadFQtwUxXqrUg/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                                <img src={require("../../images/jLewGallery.gif")}/>
                            </div>
                        </article>
                        <hr className="style2"/>
                        <article id="final-paragraph">
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <>
                                    <div>
                                        <p>{translationES.featured.p5.one}</p>
                                    </div>
                                    <div className="jestin-quote">
                                        <p><span>"</span>{translationES.featured.p5.two}<span>"</span></p>
                                        <p>- Jestin Lewis</p>
                                    </div>
                                    </>
                                    } else {
                                    return <>
                                    <div>
                                        <p>{translationEN.featured.p5.one}</p>
                                    </div>
                                    <div className="jestin-quote">
                                        <p><em><span>&ldquo;</span>{translationEN.featured.p5.two}<span>&rdquo;</span></em></p>
                                        <p><em>- Jestin Lewis</em></p>
                                    </div>
                                    </>
                                    }
                                })()
                            }
                        </article>
                    </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default FeaturedProject;