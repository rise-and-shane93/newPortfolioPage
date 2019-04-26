//Imports
import React, { Component } from 'react';
import "react-image-lightbox/style.css";

//Import Context
import { MyContext } from '../../context';

//Import Pages
import Card from '../components/Card';

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'

const cardContent = [
    {
        title: "Adena Harper",
        id: 1,
        image: "/adenaOldWebsite.png",
        text: {
            es: {
                frontDesc: "¡Mi primer sitio web!",
                rearTitle: "Mis Logros",
                rearDesc: "¡Esto fue el primer sitio web! Aunque he actualizado el sitio, ¡yo estuve muy emocionado ver los resultados de mi trabajo!"
            },
            en: {
                frontDesc: "My first website!",
                rearTitle: "Accomplishments",
                rearDesc: "This was the first site I launched! Although I have updated the site since then, I was very excited to see my early work pay off!",
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardBs: "Bootstrap"
        },
        siteLink: "https://rise-and-shane93.github.io/Adena-Mary-Kay-old/",
        ghLink: "https://github.com/rise-and-shane93/Adena-Mary-Kay-old"
    },
    {
        title: "RC's Getaway",
        id: 2,
        image: "/rcsGetaway.png",
        text: {
            es: {
                frontDesc: "¡Su escape en el verano!",
                rearTitle: "Mis Logros",
                rearDesc: "Yo ayudé a una clienta en patrocinar su condominio en la ciudad de Panama City Beach, Florída. También implementé el concepto diseño responsive a móvil."
            },
            en: {
                frontDesc: "Summer Getaway!",
                rearTitle: "Accomplishments",
                rearDesc: "I assisted a client in advertising her condominium in Panama City Beach, FL. I also implemented responsive design concepts to make it mobile friendly."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardBs: "Bootstrap"
        },
        siteLink: "rcsgetaway.com",
        ghLink: "https://github.com/rise-and-shane93/RC-s-Getaway"
    },
    {
        title: "Clean Sweep Products",
        id: 3,
        image: "/cleanSweep.png",
        text: {
            es: {
                frontDesc: "Trabajo en Equipo",
                rearTitle: "Mis Logros",
                rearDesc: "Mi amigo Daniel y yo creamos un sitio web por una compañia que fabrica productos de limpieza"
            },
            en: {
                frontDesc: "Teamwork",
                rearTitle: "Accomplishments",
                rearDesc: "My friend Daniel and I created a website for a company that speciales in industrial sweeping compound."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardBs: "Bootstrap",
            cardJquery: "jQuery"
        },
        siteLink: "https://rise-and-shane93.github.io/Clean-Sweep-Products-Current/index.html",
        ghLink: "https://github.com/rise-and-shane93/Clean-Sweep-Products-Current"
    },
    {
        title: "Shane Harper",
        id: 4,
        image: "/shaneHarper.png",
        text: {
            es: {
                frontDesc: "Mi primer sitio web de cartera",
                rearTitle: "Mis Logros",
                rearDesc: "¡Yo hice esta primera versión de mi sitio web profesional para mostrar mis proyectos y aptitudes!"
            },
            en: {
                frontDesc: "My first portfolio page",
                rearTitle: "Accomplishments",
                rearDesc: "I created my this first version of my portfolio page to showcase my existing projects and my skills!"
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardBs: "Bootstrap",
            cardJquery: "jQuery"
        },
        siteLink: "https://www.shanecharper.com/home",
        ghLink: "https://github.com/rise-and-shane93/SHportfolio"
    },
    {
        title: "JS30 Drum Set",
        id: 5,
        image: "/drumSet.png",
        text: {
            es: {
                frontDesc: "Mini Proyecto de Javascript",
                rearTitle: "Mis Logros",
                rearDesc: "Para mejorar mi conocimiento de Javascript, yo hice este mini proyecto gracias al curso de Javascript 30, creado por Wes Bos."
            },
            en: {
                frontDesc: "Mini Javascript Project",
                rearTitle: "Accomplishments",
                rearDesc: "To better my knowledge of Javascript, I made this drum set thanks to the Javascript 30 course by Wes Bos."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardJs: "JS"
        },
        siteLink: "https://rise-and-shane93.github.io/js30DrumSet/index-START.html",
        ghLink: "https://github.com/rise-and-shane93/js30DrumSet"
    },
    {
        title: "Metronome",
        id: 6,
        image: "/metronome.png",
        text: {
            es: {
                frontDesc: "Una herramienta por mi curso de violín",
                rearTitle: "Mis Logros",
                rearDesc: "A una de mis estudiantes en mi curso de violín no le gusta el ruido de los clics en metrónomo regular, ¡así que yo desarrollé uno con aplausos!"
            },
            en: {
                frontDesc: "A tool for my violin classes",
                rearTitle: "Accomplishments",
                rearDesc: "One of my violin students does not like a regular metronome's clicking noise, so I made one that claps!"
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardJs: "JS"
        },
        siteLink: "https://www.shanecharper.com/metronome.html",
        ghLink: "https://github.com/rise-and-shane93/metronome"
    },
    {
        title: "Pig Game",
        id: 7,
        image: "/pigGame.png",
        text: {
            es: {
                frontDesc: "¿Tienes suerte?",
                rearTitle: "Mis Logros",
                rearDesc: "Durante el curso de Javascript de Jonas Schmedtmann, yo hice un juego de pig para demonstrar mis aptitudes que acabé de aprender."
            },
            en: {
                frontDesc: "Do you feel lucky?",
                rearTitle: "Accomplishments",
                rearDesc: "During Jonas Schmedtmann's Javascript course, I made a pig game clone to demonstrate the skills I had just learned."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardJs: "JS"
        },
        siteLink: "https://rise-and-shane93.github.io/pigGame/",
        ghLink: "https://github.com/rise-and-shane93/pigGame"
    },
    {
        title: "Budget App",
        id: 8,
        image: "/budgetApp.png",
        text: {
            es: {
                frontDesc: "Más Javacript",
                rearTitle: "Mis Logros",
                rearDesc: "Yo hice una aplicación de presupuesto durante el mismo curso de Jonas Schmedtmann. ¡Ya es hora de formar buenos habitos de finanza!"
            },
            en: {
                frontDesc: "More Javacript",
                rearTitle: "Accomplishments",
                rearDesc: "I made a budget app during the same course by Jonas Schmedtmann. It's time to form good personal finance habits!"
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardJs: "JS"
        },
        siteLink: "https://rise-and-shane93.github.io/budgetApp/",
        ghLink: "https://github.com/rise-and-shane93/budgetApp"
    },
    {
        title: "Adena Harper New Site",
        id: 9,
        image: "/adenaWebsite.png",
        text: {
            es: {
                frontDesc: "Una Actualización Necesaria",
                rearTitle: "Mis Logros",
                rearDesc: "Yo me di cuenta de que había aprendido nuevos conceptos sin actualizar mi primero sitio web. Entonces, yo me puse a trabajar para demonstrar que yo puedo crear sitios web más complicados."
            },
            en: {
                frontDesc: "A Needed Update",
                rearTitle: "Accomplishments",
                rearDesc: "I realized that I had learned new concepts without updating my first website. Therefore, I got to work to demonstrate that I can create more complex sites."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardJs: "JS",
            cardJquery: "jQuery",
            cardApi: "REST API"
        },
        siteLink: "https://www.adenaharper.com/home",
        ghLink: "https://github.com/rise-and-shane93/adenaMaryKay"
    },
    {
        title: "Charmed",
        id: 10,
        image: "/charmed.png",
        text: {
            es: {
                frontDesc: "Arregla de un error",
                rearTitle: "Mis Logros",
                rearDesc: "Un restaurante en Baltimore tuvo un problema con su sitio web - ¡mostraba los menus incorrectos en Sábado! Yo ayudé a la jefa por arreglar ese problema."
            },
            en: {
                frontDesc: "Bug fix",
                rearTitle: "Accomplishments",
                rearDesc: "A restaurant in Baltimore had a problem with its website - it was showing the wrong menus on Saturday! I helped the manager by fixing this problem."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardJs: "JS",
            cardWp: "Wordpress"
        },
        siteLink: "http://www.charmedrestaurant.com/",
        ghLink: "https://github.com/rise-and-shane93/readThis/blob/master/README.md"
    },
    {
        title: "Jestin Lewis",
        id: 11,
        image: "/jLew.png",
        text: {
            es: {
                frontDesc: "La Pelota es la Vida",
                rearTitle: "Mis Logros",
                rearDesc: "Un amigo mío de mi universidad y jugador de baloncesto profesional Jestin Lewis quiso un sitio web para hacer un anuncio de su campamento de baloncesto y para vender su mercancía."
            },
            en: {
                frontDesc: "Ball is Life",
                rearTitle: "Accomplishments",
                rearDesc: "My friend from college and professional basketball player Jestin Lewis wanted a website to advertise his summer camp and to sell his merchandise."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardCss: "CSS",
            cardSass: "Sass",
            cardJs: "JS",
            cardJquery: "jQuery",
            cardGulp: "Gulp"
        },
        siteLink: "https://www.jestinlewis.com/home",
        ghLink: "https://github.com/rise-and-shane93/jestinLewis"
    },
    {
        title: "Scoreboard",
        id: 12,
        image: "/scoreboard.png",
        text: {
            es: {
                frontDesc: "¡Mi primera app de React!",
                rearTitle: "Mis Logros",
                rearDesc: "Yo hice los primeros pasos en aprender React, y mediante crear esta aplicación con el curso de React de TreeHouse, estoy muy agradecido por todo lo que he aprendido."
            },
            en: {
                frontDesc: "My first React app!",
                rearTitle: "Accomplishments",
                rearDesc: "I took the first steps in learning React, and by making this application with TreeHouse's React course, I am very thankful for all that I have learned."
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardJs: "JS",
            cardReact: "React",
            cardWebpack: "Webpack"
        },
        siteLink: "https://rise-and-shane93.github.io/reactCourse/",
        ghLink: "https://github.com/rise-and-shane93/reactCourse"
    },
    {
        title: "React Router",
        id: 13,
        image: "/router.png",
        text: {
            es: {
                frontDesc: "A Continuación de React",
                rearTitle: "Mis Logros",
                rearDesc: "Para ampliar mi conocimiento de React, yo hice una SPA (una aplicación de una sola página web) simple con React Router. ¡Gracias otra vez TreeHouse!"
            },
            en: {
                frontDesc: "React Continued",
                rearTitle: "Accomplishments",
                rearDesc: "To expand my knowledge of React, I made a simple SPA (single page application) with React Router. Thank you again TreeHouse!"
            }
        },
        skillsUsed: {
            cardHtml: "HTML",
            cardJs: "JS",
            cardReact: "React",
            cardWebpack: "Webpack"
        },
        siteLink: "https://rise-and-shane93.github.io/reactRouterTest/",
        ghLink: "https://github.com/rise-and-shane93/reactRouterTest"
    },
];


class Projects extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        document.body.classList.toggle("with--sidebar");
    }

    render() {
        
        var list = [];
        for (var i = 0; i < cardContent.length; i++) {
            list.push(<Card 
                index={i}
                cardImage={cardContent[i].image}
                cardTitle={cardContent[i].title}
                desc={cardContent[i].text}
                siteLink={cardContent[i].siteLink}
                ghLink={cardContent[i].ghLink}
                skills={cardContent[i].skillsUsed}
                cardClass="project project-card"
            />);
        }
        return(
            <MyContext.Consumer>
                {(context) => (
                    <>
                        <section id="myProjects">
                            {/* Title */}
                            {
                                (() => {
                                    if (context.state.language === 'es') {
                                    return <h1>{translationES.projects.intro.h1}</h1>
                                    } else {
                                    return <h1>{translationEN.projects.intro.h1}</h1>
                                    }
                                })()
                            }
                            <article id="project-cards">
                                {list}
                            </article>
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Projects;