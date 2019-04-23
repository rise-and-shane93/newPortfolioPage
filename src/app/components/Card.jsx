//Imports
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

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

        // state = {
        //     flipped: false,
        // }

        flipCard() {
            this.setState({ flipped: !this.state.flipped });
        }

        

        render() {
            const {
                index,
                openModal,
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
                            <img src={cardImage} />
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
                                    <a href={siteLink} target="_blank" className="fas fa-external-link-alt"></a>
                                    <a href={ghLink} target="_blank" className="fab fa-github"></a>
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