//Imports
import React, { Component } from 'react';

//Import Context
import { MyContext } from '../../context';

class Card extends Component {

        constructor(props) {
            super(props);
            this.state = {
                flipped: false,
            };
            this.flipCard = this.flipCard.bind(this);
        }

        flipCard() {
            this.setState({ flipped: !this.state.flipped });
        }

        render() {
            const {
                cardTitle,
                cardImage,
                desc,
                siteLink,
                ghLink,
                cardClass
            } = this.props;

            const skillList = Object.entries(this.props.skills);

            var list = [];
            for (const [skillClass, skillName] of skillList) {
                list.push(<span className={skillClass}>{skillName}</span>);
            }

            return(
                <MyContext.Consumer>
                {(context) => (
    
                // <div onClick={() => openModal(index)}>
                <div className={cardClass}>
                    <div className={this.state.flipped ? "is-flipped" : null} onClick={this.flipCard} >
                        <div className="card__face card__face--front">
                            {/* <img src={require(images[index])} /> */}
                            <img data-src={cardImage} className="lazyload" alt="A screenshot of a project that I worked on."/>
                            <div className="card-face-text">
                            <h4>{cardTitle}</h4>
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <p>{desc.es.frontDesc}</p>
                                    } else {
                                    return <p>{desc.en.frontDesc}</p>
                                    }
                                })()
                            }
                            </div>
                        </div>
                        <div className="card__face card__face--back">
                            <div className="card-face-text">
                                {
                                    (() => {
                                        if (context.state.language === 'es') {
                                        return <>
                                            <h4>{desc.es.rearTitle}</h4>
                                            <p>{desc.es.rearDesc}</p>
                                        </>
                                        } else {
                                        return <>
                                            <h4>{desc.en.rearTitle}</h4>
                                            <p>{desc.en.rearDesc}</p>
                                        </>
                                        }
                                    })()
                                }
                                <p className="skillList">{list}</p>
                                <div className="back-links">
                                    <a href={siteLink} target="_blank"  rel="noopener noreferrer" className="fas fa-external-link-alt" alt="Website's external link"><span className="cardIconDesc">The link to the site or project</span></a>
                                    <a href={ghLink} target="_blank"  rel="noopener noreferrer" className="fab fa-github" alt="GitHub repository link"><span className="cardIconDesc">The link to the Github repository</span></a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                )}
            </MyContext.Consumer>

            );
        }
        
    }
    

export default Card;