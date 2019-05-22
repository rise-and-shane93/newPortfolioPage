import React, { Component } from 'react';
import '../../scss/App.scss';
import { MyContext } from '../../context';


class privacyPolicy extends Component {

    componentDidMount() {
        if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            var element = document.getElementById('privacy-policy');
            element.scrollIntoView();
        } else {
            window.scrollTo(0,0);
        }
        document.body.classList.toggle("with--sidebar");
    }

    render() {

    

    return(
        <MyContext.Consumer>
            {(context) => (
                <section id="privacy-policy">
                {
                    (() => {
                      if (context.state.language === 'es') {
                        return <article>
                        <h1>Política de privacidad</h1>


                    <p>Fecha efectiva: April 25, 2019</p>


                    <p>Shane Harper ("nosotros", "a nosotros", "nuestro") opera el sitio web https://www.shanecharper.com (en adelante, el "Servicio").</p>

                    <p>Esta página le informa de nuestras políticas en materia de recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y de las opciones de las que dispone en relación con esos datos. Our Privacy Policy  for Shane Harper is created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy Generator</a>.</p>

                    <p>Utilizamos sus datos para prestarle el Servicio y mejorarlo. Al utilizar el Servicio, usted acepta la recopilación y el uso de información de conformidad con esta política. A menos que esta Política de privacidad defina lo contrario, los términos utilizados en ella tienen los mismos significados que nuestros Términos y Condiciones, disponibles en el https://www.shanecharper.com</p>

                    <h2>Definiciones</h2>
                    <ul>
                        <li>
                            <p><strong>Servicio</strong></p>
                                    <p>Servicio es el sitio web https://www.shanecharper.com operado por Shane Harper</p>
                                </li>
                        <li>
                            <p><strong>Datos personales</strong></p>
                            <p>Datos personales significa los datos sobre una persona física viva que puede ser identificada a partir de esos datos (o con esos datos y otra información de la que dispongamos o probablemente podamos disponer).</p>
                        </li>
                        <li>
                            <p><strong>Datos de uso</strong></p>
                            <p>Datos de uso son los datos recopilados automáticamente, generados por el uso del Servicio o por la propia infraestructura del Servicio (por ejemplo, la duración de la visita a una página).</p>
                        </li>
                        <li>
                            <p><strong>Cookies</strong></p>
                            <p>Las cookies son pequeños archivos ialmacenados en su dispositivo (ordenador o dispositivo móvil).</p>
                        </li>
                    </ul>

                    <h2>Recopilación y uso de la información</h2>
                    <p>Recopilamos diferentes tipos de información con diversas finalidades para prestarle el
                    Servicio y mejorarlo.</p>

                    <h3>Tipos de datos recopilados</h3>

                    <h4>Datos personales</h4>
                    <p>Cuando utilice nuestro Servicio, es posible que le pidamos que nos proporcione determinada información personalmente identificable que podrá ser utilizada para contactar con usted o para identificarle ("Datos personales"). La información personalmente identificable puede incluir, entre otras, la siguiente:</p>

                    <ul>
                        <li>Dirección de e-mail</li>    <li>Nombre y apellidos</li>            <li>Cookies y datos de uso</li>
                    </ul>

                    <h4>Datos de uso</h4>

                    <p>También recopilamos información sobre la forma en la que se accede y utiliza el Servicio («Datos de uso»). Estos Datos de uso pueden incluir información como la dirección del protocolo de Internet de su ordenador (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas que visita de nuestro Servicio, la hora y la fecha de su visita, el tiempo que pasa en esas páginas, identificadores exclusivos de dispositivos y otros datos de diagnóstico.</p>

                    <h4>Datos de cookies y seguimiento</h4>
                    <p>Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad de nuestro Servicio y mantener determinada información.</p>
                    <p>Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador exclusivo anónimo. Las cookies son enviadas a su navegador desde un sitio web y se almacenan en su dispositivo. Otras tecnologías de seguimiento también utilizadas son balizas, etiquetas y scripts para recopilar y rastrear la información, así como para mejorar y analizar nuestro Servicio.</p>
                    <p>Usted puede ordenar a su navegador que rechace todas las cookies o que le avise cuando se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.</p>
                    <p>Ejemplos de Cookies que utilizamos:</p>
                    <ul>
                        <li><strong>Cookies de sesión.</strong> Utilizamos Cookies de sesión para operar nuestro Servicio.</li>
                        <li><strong>Cookies de preferencia.</strong> Utilizamos Cookies de preferencia para recordar sus preferencias y diversos ajustes.</li>
                        <li><strong>Cookies de seguridad.</strong> Utilizamos Cookies de seguridad para fines de seguridad.</li>
                    </ul>

                    <h2>Uso de datos</h2> 
                    <p>Shane Harper utiliza los datos recopilados con diversas finalidades:</p>    
                    <ul>
                        <li>Suministrar y mantener nuestro Servicio</li>
                        <li>Notificarle cambios en nuestro Servicio</li>
                        <li>Permitirle participar en funciones interactivas de nuestro Servicio cuando decida hacerlo</li>
                        <li>Prestar asistencia al cliente</li>
                        <li>Recopilar análisis o información valiosa que nos permitan mejorar nuestro Servicio</li>
                        <li>Controlar el uso de nuestro Servicio</li>
                        <li>Detectar, evitar y abordar problemas técnicos</li>
                    </ul>

                    <h2>Transferencia de datos</h2>
                    <p>Su información, incluyendo Datos personales, puede ser transferida a —y mantenida en— ordenadores localizados fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.</p>
                    <p>Si usted se encuentra fuera de United States y decide facilitarnos información, tenga en cuenta que nosotros transferimos los datos, incluyendo Datos personales, a United States y que los tratamos allí.</p>
                    <p>Su aceptación de esta Política de privacidad seguida de su envío de esta información representa que está de acuerdo con dicha transferencia.</p>
                    <p>Shane Harper emprenderá todas las medidas razonables necesarias para garantizar que sus datos sean tratados de forma segura y de conformidad con esta Política de privacidad y no se realizará ninguna transferencia de sus Datos personales a una organización o país, salvo que existan unos controles adecuados establecidos incluyendo la seguridad de sus datos y otra información personal.</p>

                    <h2>Divulgación de datos</h2>

                    <h3>Requisitos legales</h3>
                    <p>Shane Harper puede divulgar sus Datos personales de buena fe cuando considere que esta acción es necesaria para lo siguiente:</p>
                    <ul>
                        <li>Cumplir una obligación legal</li>
                        <li>Proteger y defender los derechos o bienes de Shane Harper</li>
                        <li>Prevenir o investigar posibles infracciones en relación con el Servicio</li>
                        <li>Proteger la seguridad personal de usuarios del Servicio o del público</li>
                        <li>Protegerse frente a consecuencias legales</li>
                    </ul>

                    <h2>Seguridad de los datos</h2>
                    <p>La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico resulta 100% seguro. A pesar de que nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos personales, no podemos garantizar su seguridad absoluta.</p>

                    <h2>Proveedores de servicios</h2>
                    <p>Podemos contratar a personas físicas y jurídicas terceras para facilitar nuestro Servicio ("Proveedores de servicios"), para que presten el Servicio en nuestro nombre, para que suministren servicios relacionados con el Servicio o para que nos ayuden a analizar cómo se utiliza nuestro Servicio.</p>
                    <p>Estos terceros tienen acceso a sus Datos personales únicamente para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos con ningún otro fin.</p>



                    <h2>Enlaces a otros sitios</h2>
                    <p>Nuestro Servicio puede contener enlaces a otros sitios no operados por nosotros. Si hace clic en el enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de todos los sitios que visite.</p>
                    <p>No tenemos ningún control ni asumimos responsabilidad alguna con respecto al contenido, las políticas o prácticas de privacidad de sitios o servicios de terceros.</p>


                    <h2>Privacidad del menor</h2>
                    <p>Nuestro servicio no está dirigido a ningún menor de 18 años (en adelante, "Menor").</p>
                    <p>No recopilamos de forma consciente información personalmente identificable de menores de 18 años. Si es usted un padre/madre o tutor y tiene conocimiento de que su hijo nos ha facilitado Datos personales, contacte con nosotros. Si tenemos conocimiento de que hemos recopilado Datos personales de menores sin verificación del consentimiento parental, tomamos medidas para eliminar esa información de nuestros servidores.</p>


                    <h2>Cambios en esta Política de privacidad</h2>
                    <p>Podemos actualizar nuestra Política de privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de privacidad en esta página.</p>
                    <p>Le informaremos a través del e-mail y/o de un aviso destacado sobre nuestro Servicio antes de que el cambio entre en vigor y actualizaremos la «fecha efectiva» en la parte superior de esta Política de privacidad.</p>
                    <p>Le recomendamos que revise esta Política de privacidad periódicamente para comprobar si se ha introducido algún cambio. Los cambios en esta Política de privacidad entran en vigor cuando se publican en esta página.</p>


                    <h2>Contacte con nosotros</h2>
                    <p>Si tiene alguna pregunta sobre esta Política de privacidad, contacte con nosotros: </p>
                    <ul>
                            <li>Por e-mail: cdtharper@gmail.com</li>
                            
                            </ul>
                        </article>
                      } else {
                        return <article>
                        <h1>Privacy Policy</h1>

                            <p>Effective date: April 25, 2019</p>


                            <p>Shane Harper ("us", "we", or "our") operates the https://www.shanecharper.com website (the "Service").</p>

                            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Shane Harper is created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy Generator</a>.</p>

                            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.shanecharper.com</p>


                            <h2>Information Collection And Use</h2>

                            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

                            <h3>Types of Data Collected</h3>

                            <h4>Personal Data</h4>

                            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

                            <ul>
                            <li>Email address</li><li>First name and last name</li><li>Cookies and Usage Data</li>
                            </ul>

                            <h4>Usage Data</h4>

                            <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                            <h4>Tracking & Cookies Data</h4>
                            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                            <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                            <p>Examples of Cookies we use:</p>
                            <ul>
                                <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
                                <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                                <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
                            </ul>

                            <h2>Use of Data</h2>
                                
                            <p>Shane Harper uses the collected data for various purposes:</p>    
                            <ul>
                                <li>To provide and maintain the Service</li>
                                <li>To notify you about changes to our Service</li>
                                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                                <li>To provide customer care and support</li>
                                <li>To provide analysis or valuable information so that we can improve the Service</li>
                                <li>To monitor the usage of the Service</li>
                                <li>To detect, prevent and address technical issues</li>
                            </ul>

                            <h2>Transfer Of Data</h2>
                            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                            <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
                            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                            <p>Shane Harper will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

                            <h2>Disclosure Of Data</h2>

                            <h3>Legal Requirements</h3>
                            <p>Shane Harper may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                            <ul>
                                <li>To comply with a legal obligation</li>
                                <li>To protect and defend the rights or property of Shane Harper</li>
                                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                                <li>To protect the personal safety of users of the Service or the public</li>
                                <li>To protect against legal liability</li>
                            </ul>

                            <h2>Security Of Data</h2>
                            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                            <h2>Service Providers</h2>
                            <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>



                            <h2>Links To Other Sites</h2>
                            <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>


                            <h2>Children's Privacy</h2>
                            <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                            <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


                            <h2>Changes To This Privacy Policy</h2>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                            <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


                            <h2>Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <ul>
                                    <li>By email: cdtharper@gmail.com</li>
                                    
                                    </ul>
                        </article>
                      }
                    })()
                }
                </section>
            )}
        </MyContext.Consumer>
    );
    }
}

export default privacyPolicy;