import React, { Component } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { MyProvider } from 'context';
import './scss/App.scss';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <BrowserRouter>
        <ScrollToTop>
          <div className="site-container">
            <div className="site-pusher">
              <Header className="App-header App" title="Menu"/>
                <div className="site-content">
                  <div className="container">
                    <main>
                      <Route exact path="/" render={()=> <MainContent id="hey"/>}/>
                      <Route exact path="/about" render={()=> <About id="wut"/>}/>
                      <Route exact path="/projects" render={()=> <Projects />}/>
                    </main>
                  </div>{/* /.container */}
                </div>{/* /.site-content */}
              <div className="site-cache" id="site-cache"></div>{/* /.site-cache */}
            </div>{/* /.site-pusher */}
          </div>{/* /.site-container */}
          </ScrollToTop>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;
