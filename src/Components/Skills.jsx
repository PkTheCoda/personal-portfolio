import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <>
            <h1 className="skills--title"> <span className="checkpoint-num">02</span> My Skills <span className="tc">and Tools</span> </h1>
            <section className="skills--wrapper" id="skills">
                
                <div className="language-skill-holder skills-holder">
                    <h1 className="skills-inner-title"> <span className="skills-checkpoint">01</span> Languages:</h1>

                    <div className="img-holder">    

                        <div className="image-items">                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />          
                            <p className="image-subtitle">HTML</p>
                        </div> 

                        <div className="image-items">                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />           
                            <p className="image-subtitle">CSS</p>
                        </div>    

                        <div className="image-items">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> 
                            <p className="image-subtitle">JavaScript</p>
                        </div> 

                        <div className="image-items">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />   
                            <p className="image-subtitle">Java</p>
                        </div>   

                        <div className="image-items">                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />           
                            <p className="image-subtitle">Python</p>
                        </div>                        
                                                     
                    </div>

                </div>

                <div className="technologies-skill-holder skills-holder">
                    <h1 className="skills-inner-title"> <span className="skills-checkpoint">02</span> Technologies:</h1>

                    <div className="img-holder">

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <p className="image-subtitle">ReactJS</p>
                        </div> 

                        <div className="image-items">                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />          
                            <p className="image-subtitle">NodeJS</p>
                        </div> 

                        <div className="image-items">                          
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                            <p className="image-subtitle">Bootstrap</p>
                        </div> 

                        <div className="image-items">                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />          
                            <p className="image-subtitle">Redux</p>
                        </div> 

                        <div className="image-items">                         
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                            <p className="image-subtitle">TailwindCSS</p>
                        </div> 
                    </div>

                </div>

                <div className="services-skill-holder skills-holder">
                    <h1 className="skills-inner-title"> <span className="skills-checkpoint">03</span> Miscellaneous:</h1>

                    <div className="img-holder">

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <p className="image-subtitle">Github</p>
                        </div> 

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <p className="image-subtitle">Git</p>
                        </div> 

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" /> 
                            <p className="image-subtitle">Webpack</p>
                        </div>

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />  
                            <p className="image-subtitle">Firebase</p>
                        </div>     

                        <div className="image-items">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /> 
                            <p className="image-subtitle">npm</p>
                        </div>     

                        <div className="image-items">                        
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" /> 
                            <p className="image-subtitle">Wordpress</p>
                        </div>     
          
          
          
                    </div>

                </div>

            </section>
        </>
    )
}

export default Skills