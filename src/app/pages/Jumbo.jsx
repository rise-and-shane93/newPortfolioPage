import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import '../../scss/App.scss';
import { MyContext } from '../../context'

//Import translations
import * as translationES from '../../translations/es';
import * as translationEN from '../../translations/en';

class Jumbo extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }

    render() {
        return(
            <MyContext.Consumer>
{(context) => (
                    <div className="jumbotron" ref={this.elem}>

                <div className="jumbo-text">
                  {
                    (() => {
                      if (context.state.language === 'es') {
                        return <div className="page-header">
                          <h1 className="page-heading-h1">{translationES.home.jumbo.h1}</h1>
      
                          <h3 className="page-heading-h2">{translationES.home.jumbo.h3}</h3>
                        </div>
                      } else {
                        return <div className="page-header">
                          <h1 className="page-heading-h1">{translationEN.home.jumbo.h1}</h1>
      
                          <h3 className="page-heading-h2">{translationEN.home.jumbo.h3}</h3>
                        </div>
                      }
                    })()
                  }
                </div>
                <div className="button-style1 smooth-scroll" onClick={this.scrollToBottom}>
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <h4 style={{margin: "0.5rem 0"}}>
                          {translationES.home.jumbo.h4}
                        </h4>
                      } else {
                        return <h4 style={{margin: "0.5rem 0"}}>
                          {translationEN.home.jumbo.h4}
                        </h4>
                      }
                    })()
                  }
                </div>
                <div style={{ position:"absolute", clear: "both", bottom: "66px" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
                </div>
              )}
            </MyContext.Consumer>

        );
    }
}

export default Jumbo;

