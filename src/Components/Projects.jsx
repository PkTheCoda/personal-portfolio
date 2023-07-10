import React from "react";
import project1 from '../../src/Components/images/project1.png'
import project2 from '../../src/Components/images/talem-project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <>
            <h1 className="projects--title"> <span className="checkpoint-num">03</span> My <span className="tc">Projects</span></h1>
            <section className="projects--wrapper" id="projects">

            <div className="project1-holder">

                <div className="project-image-holder">
                    <div className="project-titles">
                        <h1 className="project-img-title"><span className="projects-checkpoint">01</span> Talem - Extracurriculars</h1>
                        <h1 className="project-img-subtitle">Extracurricular/Internship Finder</h1>
                    </div>
                    <img src={project2} alt="Image of my first project" />
                </div>

                <div className="project-details-holder">
                    <div className="project-summary-holder">
                        <div className="projects-summary-title">Summary</div>
                        <div className="projects-summary-text">
                            <span className="tc">Talem</span> is a a state-of-the-art website that allows highschoolers to find the perfect
                            extracurriculars and internships for <span className="tc">them.</span> Talem has a massive database of internships and 
                            extracurriculars and allows users to filter through them with over 15 different filtering options. The website has a 
                            full integrated backend and beautiful frontend made with
                            <span className="tc"> TailwindCSS</span>
                        </div>
                    </div>

                    <div className="builtwith-holder">
                        Technologies Used
                        <div className="builtwith-technologies">HTML, CSS, JS, ReactJS, Firebase, React Router, TailwindCSS, shadcn, Radix UI</div>
                    </div>

                    <div className="project-buttons-holder">
                        <button className="project-live pbutton hover-underline-animation">
                            <a href="https://talem.vercel.app/" target="_blank">Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </button>
                        <button className="project-repo pbutton hover-underline-animation">
                            <a href="https://github.com/PkTheCoda/talem-app" target="_blank">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </button>
                    </div>
                </div>
            </div>

                <div className="project2-holder">
                    <div className="project-image-holder">
                        <div className="project-titles">
                            <h1 className="project-img-title"><span className="projects-checkpoint">02</span> learntheweb.org</h1>
                            <h1 className="project-img-subtitle">Online Computer Science Nonprofit</h1>
                        </div>
                        <img src={project1} alt="Image of my first project" />
                    </div>

                    <div className="project-details-holder">
                        <div className="project-summary-holder">
                            <div className="projects-summary-title">Summary</div>
                            <div className="projects-summary-text">
                                <span className="tc">learntheweb.org</span> is a free online learning platform designed to make coding 
                                easy and accessible to people of all ages and backgrounds. Learntheweb uses features like <span className="tc">content-rich 
                                lessons, live workshops, and interactive projects</span> to help you better understand how to program! The website is built
                                with a wordpress front-end, along with PHP and CSS
                            </div>
                        </div>

                        <div className="builtwith-holder">
                            Technologies Used
                            <div className="builtwith-technologies">Wordpress, HTML, CSS, PHP</div>
                        </div>

                        <div className="project-buttons-holder">
                            <button className="project-live pbutton hover-underline-animation"><a href="https://learntheweb.org" target="_blank">Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></button>
                        </div>
                    </div>

                </div>

                <div className="project3-holder">

                    <div className="project-image-holder">
                        <div className="project-titles">
                            <h1 className="project-img-title"><span className="projects-checkpoint">03</span> Urban Escape</h1>
                            <h1 className="project-img-subtitle">Mock Ecommerce Platform</h1>
                        </div>
                        <img src="https://user-images.githubusercontent.com/107774675/247635446-8786607a-6ebf-4d9b-9284-b1e6b67a0bdf.png" alt="Image of my first project" />
                    </div>

                    <div className="project-details-holder">
                        <div className="project-summary-holder">
                            <div className="projects-summary-title">Summary</div>
                            <div className="projects-summary-text">
                                <span className="tc">Urban Escape</span> is a mock front-end furniture store built primarily with  
                                <span className="tc"> React, React Router, and CSS</span>. The website uses Firebase as a back-end allowing
                                users to sign in and save their preferences/data. The store allows users to browse, add, and remove items
                                from their cart. 
                            </div>
                        </div>

                        <div className="builtwith-holder">
                            Technologies Used
                            <div className="builtwith-technologies">HTML, CSS, JS, ReactJS, React Router, Firebase</div>
                        </div>

                        <div className="project-buttons-holder">
                            <button className="project-live pbutton hover-underline-animation">
                                <a href="https://ecommerce-app-git-master-pkthecoda.vercel.app/" target="_blank">Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </button>

                            <button className="project-repo pbutton hover-underline-animation">
                                <a href="https://github.com/PkTheCoda/ecommerce-app" target="_blank">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="project4-holder">

                    <div className="project-image-holder">
                        <div className="project-titles">
                            <h1 className="project-img-title"><span className="projects-checkpoint">04</span> Memory Game</h1>
                            <h1 className="project-img-subtitle">Simple Front-end Memory Game</h1>
                        </div>
                        <img src="https://user-images.githubusercontent.com/107774675/248482996-6cc87a26-5d6a-4ed5-af71-78800edbf00b.png" alt="Image of my first project" />
                    </div>

                    <div className="project-details-holder">
                        <div className="project-summary-holder">
                            <div className="projects-summary-title">Summary</div>
                            <div className="projects-summary-text">
                                <span className="tc">Memory</span> is a simple game built with primarily ReactJS along with a bit of   
                                <span className="tc"> HTML and CSS</span>. The website mimics a classic memory game where the goal is to
                                click as many cards as possible without clicking the same card. The app keeps control of your current score 
                                along with your highscore. Data is taken from <span className="tc">PokeAPI</span>
                            </div>
                        </div>

                        <div className="builtwith-holder">
                            Technologies Used
                            <div className="builtwith-technologies">HTML, CSS, JS, ReactJS</div>
                        </div>

                        <div className="project-buttons-holder">
                            <button className="project-live pbutton hover-underline-animation">
                                <a href="https://memory-card-game-kc5vdmlo7-pkthecoda.vercel.app/" target="_blank">Live Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </button>
                            <button className="project-repo pbutton hover-underline-animation">
                                <a href="https://github.com/PkTheCoda/memory-card-game" target="_blank">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </button>
                        </div>
                    </div>

                </div>

            </section>
            
            <div className="end-project-holder">
                    <h1 className="end-project-title"><span className="projects-checkpoint">05</span> And don't forget this site aswell - coded by me!</h1>
                    <button className="project-repo pbutton hover-underline-animation">
                                <a href="https://github.com/PkTheCoda/personal-portfolio" target="_blank" className="website-repo">View its Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </button>
            </div>
        </>
    )
}

export default Projects