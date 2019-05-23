import React, { Component } from 'react';
import '../../scss/App.scss';

class Skill extends Component {

    render() {
        const skillSet = Object.entries(this.props.skillset);
        var list = [];
        for (const [skill, url] of skillSet) {
            list.push(<div className="skill-entry">
            <img data-src={url} className="lazyload" alt="A logo of the specific skill"/>
            <p>{skill}</p>
            </div>);
        }
        return(
            <div className={this.props.divClass} id={this.props.key}>
                <h2 className={this.props.titleClass}>{this.props.name}</h2>
                <hr className="style14"/>
                <div className={this.props.skillInner}>
                    {list}
                </div>
            </div>
        );
    }
}

export default Skill;