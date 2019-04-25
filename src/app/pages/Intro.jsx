import React from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import { MyContext } from '../../context';
import { NavLink } from 'react-router-dom';

//Import translations
import * as translationES from '../../translations/es';
import * as translationEN from '../../translations/en';

const Intro = () => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <>
                <article id="introduction">
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <h2>
                        {translationES.home.intro.title}
                        </h2>
                      } else {
                        return <h2>
                        {translationEN.home.intro.title}
                        </h2>
                      }
                    })()
                }
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <p>
                        {translationES.home.intro.briefDesc}
                        </p>
                      } else {
                        return <p>
                        {translationEN.home.intro.briefDesc}
                        </p>
                      }
                    })()
                }
                </article>
                <hr className="style14"/>
                <article id="featured-project">
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <h2>
                        {translationES.home.featProj.title}
                        </h2>
                      } else {
                        return <h2>
                        {translationEN.home.featProj.title}
                        </h2>
                      }
                    })()
                }
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <p>
                        {translationES.home.featProj.desc}
                        </p>
                      } else {
                        return <p>
                        {translationEN.home.featProj.desc}
                        </p>
                      }
                    })()
                }
                <div className="case-study">
                <div className="case-study-buttons">
                    {
                    (() => {
                      if (context.state.language === 'es') {
                        return <>
                        <a className="button-style2" href="https://www.jestinlewis.com/home" target="_blank" rel="noopener noreferrer">
                        {translationES.home.featProj.viewSite}</a>
                        <NavLink to="/featured-project" className="button-style2" data-aos="fade-in">
                        {translationES.home.featProj.viewStudy}
                        </NavLink>
                        </>
                      } else {
                        return <>
                        <a className="button-style2" href="https://www.jestinlewis.com/home" target="_blank" rel="noopener noreferrer">
                        {translationEN.home.featProj.viewSite}</a>
                        <NavLink to="/featured-project" className="button-style2" data-aos="fade-in">
                        {translationEN.home.featProj.viewStudy}
                        </NavLink>
                        </>
                      }
                    })()
                }
                    </div>
                    <img src={require("../../images/jLewSite.jpg")} alt="A screenshot of Jestin Lewis's website on desktop and mobile"/>
                </div>
                </article>
                </>
            )}
        </MyContext.Consumer>
    );
}
  
export default Intro;