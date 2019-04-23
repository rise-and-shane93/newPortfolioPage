import React from 'react'

// Import context and provider
import { MyContext } from '../../context'

//Import Skill component
import Skill from '../components/Skill'

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'

// Import CSS
import '../../app/styles/components/links.css'

const About = () => {

    const skills = [
        {
            name: "HTML",
            id: "html",
            skillset: {
                HTML5: "/html5.png",
                Emmet: "/emmet.png",
                Bootstrap: "/bootstrap.png"
            }
        },
        {
            name: "CSS",
            id: "css",
            skillset: {
                CSS3: "/css3.png",
                Sass: "/sass.png",
                Flexbox: "/flexbox.jpg",
                Grid: "/grid.png"
            }
        },
        {
            name: "JavaScript",
            id: "javascript",
            skillset: {
                VanillaJS: "/javascript.png",
                React: "/react.png",
                jQuery: "/jQuery.gif",
                AJAX: "/ajax.png"
            }
        },
        {
            name: "Build Tools",
            id: "build",
            skillset: {
                Gulp: "/gulp.jpg",
                Webpack: "/webpack.png",
                NPM: "/npm.png"
            }
        },
        {
            name: "CMS",
            id: "cms",
            skillset: {
                WordPress: "/wordpress.png"
            }
        },
        {
            name: "Other",
            id: "other",
            skillset: {
                Shell: "/terminal.png",
                Git: "/git.png",
                GitHub: "/github.png",
                Accessibility: "/accessibility.png"
            }
        },
        {
            name: "Text Editors",
            id: "software",
            skillset: {
                VScode: "/vscode.png",
                Sublime: "/sublime.png"
            }
        }
    ]

  return (
    <MyContext.Consumer>
      {(context) => (
        <>
        <section id="about">
            {
                (() => {
                    if (context.state.language === 'es') {
                    return <>
                        <h1>{translationES.about.bio.h1}</h1>
                    </>
                    } else {
                    return <>
                        <h1>{translationEN.about.bio.h1}</h1>
                    </>
                    }
                })()
            }
            <article id="bio">
                <div className="bio-image">
                    <img src={require("../../images/shane2.jpg")} />
                </div>
                <div className="bio-text">
                {
                    (() => {
                        if (context.state.language === 'es') {
                        return <>
                            <p>{translationES.about.bio.p1}</p>
                            <p>{translationES.about.bio.p2}</p>
                            <p>{translationES.about.bio.p3}</p>
                            <p>{translationES.about.bio.p4}</p>
                        </>
                        } else {
                        return <>
                            <p>{translationEN.about.bio.p1}</p>
                            <p>{translationEN.about.bio.p2}</p>
                            <p>{translationEN.about.bio.p3}</p>
                            <p>{translationEN.about.bio.p4}</p>
                        </>
                        }
                    })()
                }
                </div>
            </article>
            </section>
            <section id="mySkills">
                {
                    (() => {
                        if (context.state.language === 'es') {
                        return <>
                            <h1>{translationES.about.skills.h2}</h1>
                        </>
                        } else {
                        return <>
                            <h1>{translationEN.about.skills.h2}</h1>
                        </>
                        }
                    })()
                }
                <article id="skillset">
                {skills.map( skill =>
                    <Skill
                        divClass="skill"
                        titleClass="skill-title"
                        skillInner="skill-inner"
                        oneSkill="skill-entry"
                        key={skill.id}
                        name={skill.name}
                        skillset={skill.skillset}
                    />
                )}
                </article>
            </section>
            <section id="community">
                {
                    (() => {
                        if (context.state.language === 'es') {
                        return <h2 className="text-center">{translationES.about.community.h2}</h2>
                        } else {
                        return <h2 className="text-center">{translationEN.about.community.h2}</h2>
                        }
                    })()
                }
                <article id="codeconnector">
                {
                    (() => {
                        if (context.state.language === 'es') {
                        return <div className="text-justify">
                            <p>{translationES.about.community.p1}<a href="https://codeconnective.com/">Code Connector</a>{translationES.about.community.p2}</p>
                            <p>{translationES.about.community.p3}</p>
                            <p>{translationES.about.community.p4}</p>
                        </div>
                        } else {
                        return <div className="text-justify">
                            <p>{translationEN.about.community.p1}<a href="https://codeconnective.com/">Code Connector</a>{translationEN.about.community.p2}</p>
                            <p>{translationEN.about.community.p3}</p>
                            <p>{translationEN.about.community.p4}</p>
                        </div>
                        }
                    })()
                }
                <img src={require("../../images/codeConnector.png")}/>
                </article>
            </section>
        </>
      )}
    </MyContext.Consumer>
  )
}

export default About;