//Imports
import React from 'react';
import { Route } from 'react-router-dom';

//Import Context
import { MyContext } from '../context';

//Import pages
import MainContent from './pages/MainContent';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FeaturedProject from './pages/FeaturedProject';
import PrivacyPolicy from './pages/privacyPolicy';

//Import components
import Header from './components/Header';
import Footer from './components/Footer';

//Component Implementation
const Main = () => {
    return(
        <MyContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <div className="site-container">
                        <div className="site-pusher">
                            <Header context={context} className="App-header App" title="Menu" />
                                <div className="site-content">
                                    <div className="container">
                                        <Route exact path="/" render={() => <MainContent/>}/>
                                        <Route path="/about" render={()=> <About/>}/>
                                        <Route path="/projects" render={()=> <Projects />}/>
                                        <Route path="/contact" render={()=> <Contact />}/>
                                        <Route path="/featured-project" render={()=> <FeaturedProject />}/>
                                        <Route path="/privacy-policy" render = {()=> <PrivacyPolicy/>}/>
                                        <Footer />
                                    </div>{/* /.container */}
                                </div>{/* /.site-content */}
                            <div className="site-cache" id="site-cache"></div>{/* /.site-cache */}
                        </div>{/* /.site-pusher */}
                    </div>{/* /.site-container */}
                </React.Fragment>
            )}
        </MyContext.Consumer>
    );
}

export default Main;