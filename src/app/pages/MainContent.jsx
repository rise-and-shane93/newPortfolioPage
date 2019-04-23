import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import Jumbo from './Jumbo';
import Intro from './Intro';
import { MyContext } from '../../context'

//Import translations
import * as translationES from '../../translations/es';
import * as translationEN from '../../translations/en';

const MainContent = () => {
    return (
        <>
            <section id="welcome">
                <Jumbo className="jumbotron"/>
            </section>
            <section id="intro">
                <Intro />
            </section>
        </>
    )
}
  
export default MainContent;

