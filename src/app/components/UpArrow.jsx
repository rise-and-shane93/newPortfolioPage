//Imports
import React, { Component } from 'react';

class UpArrow extends Component {

        constructor(props) {
            super(props);
            this.state = {
                scroll: false,
            };
            this.showOnScroll = this.showOnScroll.bind(this);
        }

        componentDidMount() {
            window.addEventListener('scroll', this.showOnScroll);
        }

        showOnScroll() {
            if(window.pageYOffset >= 100) {
                this.setState({scroll: true});
            } else {
                this.setState({scroll: false});
            }
        }

        scrollToTop() {
            window.scroll({top: 0, left: 0, behavior: 'smooth' });
            this.setState({scroll: !this.state.scroll});
        }

        render() {
        
            return(
                <div className={this.props.class} onClick={this.scrollToTop}>
                    <div className={this.state.scroll ? "show" : "hide"}>
                        <i className="fas fa-angle-up"></i>
                    </div>
                </div>
            );
        }
        
    }
    

export default UpArrow;