import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import { MyContext } from '../../context'

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
                        <a className="button-style2">
                        {translationES.home.featProj.viewSite}</a>
                        <a className="button-style2">
                        {translationES.home.featProj.viewStudy}
                        </a>
                        </>
                      } else {
                        return <>
                        <a className="button-style2">
                        {translationEN.home.featProj.viewSite}</a>
                        <a className="button-style2">
                        {translationEN.home.featProj.viewStudy}
                        </a>
                        </>
                      }
                    })()
                }
                    </div>
                    <img src={require("../../images/jLewSite.jpg")} />
                </div>
                </article>
                </>
            )}
        </MyContext.Consumer>
    );
}
  
export default Intro;