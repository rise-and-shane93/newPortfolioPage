import React from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import Jumbo from './Jumbo';
import Intro from './Intro';

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

