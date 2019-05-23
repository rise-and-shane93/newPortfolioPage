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
      <header className="header">
        
        <span className="header__icon" id="header__icon" title={this.props.title} alt={this.props.title}></span>
        <NavLink className="header__logo" exact to="/">
          <img src={require("../../images/logo2.png")} alt="Shane Harper's logo"/>
        </NavLink>
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
                  <span
                    
                    onClick={this.props.context.changeLanguage}
                    data-language="en"
                  >
                    EN
                  </span>

                  <span className="nav-divider">&nbsp;&nbsp;/&nbsp;&nbsp;</span>

                  <span
                    
                    onClick={this.props.context.changeLanguage}
                    data-language="es"
                  >
                    ES
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
              {
                      (() => {
                        if (this.props.context.state.language === 'es') {
                          return 'ES'
                        } else {
                          return 'EN'
                        }
                      })()
                    }
            </button>}
        </nav>
        
      </header>
    );
  }
}

export default Header;