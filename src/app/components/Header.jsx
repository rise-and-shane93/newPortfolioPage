import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../scss/App.scss';

//Import CSS
// import '../../app/styles/components/header.css'
// import '../../app/styles/components/links.css'

//Import translations
import * as translationEN from '../../translations/en';
import * as translationES from '../../translations/es';

class Header extends Component {
  render() {
    return (
      // <header className={props.className}>
      //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //     <Navbar.Brand href="#home">
      //       <img src={require("../images/logo.png")} />
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav className="mr-auto">
      //         <Nav.Link exact to="/">Home</Nav.Link>
      //         <Nav.Link to="/about">About</Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </header>
      <header className="header">
        
        <span className="header__icon" id="header__icon" title={this.props.title} alt={this.props.title}></span>
        <NavLink className="header__logo" exact to="/">
          <img src={require("../../images/logo2.png")} alt="Shane Harper's logo"/>
        </NavLink>
        
        {/* <nav className="menu">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav> */}
        <nav className="menu">
          {
            (() => {
              if (this.props.context.state.language === 'es') {
                return <>
                  <NavLink exact to="/">{translationES.nav.home}</NavLink>
                  <NavLink to="/about">{translationES.nav.about}</NavLink>
                  <NavLink to="/projects">{translationES.nav.projects}</NavLink>
                  <NavLink to="/contact">{translationES.nav.contact}</NavLink>
                </>
              } else {
                return <>
                  <NavLink exact to="/">{translationEN.nav.home}</NavLink>
                  <NavLink to="/about">{translationEN.nav.about}</NavLink>
                  <NavLink to="/projects">{translationEN.nav.projects}</NavLink>
                  <NavLink to="/contact">{translationEN.nav.contact}</NavLink>
                </>
              }
            })()
          }
        </nav>
        <nav>
        {this.props.context.state.isNavOpen && <div className="langMenu">
        {/* <div className="menu">
                  <NavLink to="/" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.home
                        } else {
                          return translationEN.nav.home
                        }
                      })()
                    }
                  </NavLink>
                  <NavLink to="/about" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.about
                        } else {
                          return translationEN.nav.about
                        }
                      })()
                    }
                  </NavLink>
                </div>
                <div className="langMenu"> */}
                  <span
                    
                    onClick={this.props.context.changeLanguage}
                    data-language="en"
                  >
                    English
                  </span>

                  <span className="nav-divider">&nbsp;&nbsp;/&nbsp;&nbsp;</span>

                  <span
                    
                    onClick={this.props.context.changeLanguage}
                    data-language="es"
                  >
                    Espa&ntilde;ol
                  </span>

            </div>}
            {<button className={this.props.context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} 
            type="button" aria-label="Toggle navigation" onClick={this.props.context.toggleNav}
            title={
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.button
                        } else {
                          return translationEN.nav.button
                        }
                      })()
                    }>
              {/* <span />
              <span />
              <span /> */}
              {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return 'Español'
                        } else {
                          return 'English'
                        }
                      })()
                    }
            </button>}
        </nav>
        {/*<nav className="menu">
             {this.props.context.state.isNavOpen && <div className="js-nav nav">
              <ul className="nav-list">
                <li>
                  <NavLink className='link' to="/" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.home
                        } else {
                          return translationEN.nav.home
                        }
                      })()
                    }
                  </NavLink>
                </li>

                <li>
                  <NavLink className='link' to="/about" onClick={this.props.context.toggleNav}>
                    {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return translationES.nav.about
                        } else {
                          return translationEN.nav.about
                        }
                      })()
                    }
                  </NavLink>
                </li>

                <li className="nav-languages">
                  <a
                    className="link"
                    onClick={this.props.context.changeLanguage}
                    data-language="en"
                  >
                    EN
                  </a>

                  <span className="nav-divider">/</span>

                  <a
                    className="link"
                    onClick={this.props.context.changeLanguage}
                    data-language="es"
                  >
                    ES
                  </a>

                </li>
              </ul>
            </div>} 

            {<button className={this.props.context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={this.props.context.toggleNav}>
              <span />
              <span />
              <span />
            </button>}
          </nav>*/}
        
      </header>
    );
  }
}

export default Header;