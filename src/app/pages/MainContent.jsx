import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import Jumbo from './Jumbo';
import Intro from './Intro';

class MainContent extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        document.body.classList.toggle("with--sidebar");
    }

    render() {


    return (
        <>
            <section id="welcome">
                <Jumbo className="jumbotron"/>
            </section>
            <section id="intro">
                <Intro />
            </section>
        </>
    );
    }
}
  
export default MainContent;

