// import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router-dom';

// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//         if (this.props.location !== prevProps.location) {
//             window.scrollTo(0, 0);
//         }
//     }

//     render() {
//         return this.props.children;
//     }
// }

// export default withRouter(ScrollToTop);
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
//import './App.css';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
        alert('hey');
        window.scrollTo(0, 0);
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} />)} />;
  }
}

export default withRouter(ScrollToTop);