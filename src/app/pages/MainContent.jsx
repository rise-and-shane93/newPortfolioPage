import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../scss/App.scss';
import Jumbo from './Jumbo';
import Intro from './Intro';

class MainContent extends Component {
    componentDidMount() {
        if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            var element = document.getElementById('welcome');
            element.scrollIntoView();
        } else {
            window.scrollTo(0,0);
        }
        document.body.classList.remove("with--sidebar");
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

