import React from "react";
import mePicture from "../Components/images/mepicture.jpg"

function About() {

    return (
        <section className="about--wrapper" id="about">
            <div className="about-details-wrapper">
                <h1 className="about-title hover-underline-animation"> <span className="checkpoint-num">01</span> About Me</h1>


                <p className="about-description">
                    Hi there! I'm Pranav, a rising junior in highschool based out of Richmond, Virginia. Ever since
                    I was a kid, I have always been fascinated with how diverse the web was -- and that passion has 
                    led me to pursue web development.
                    <br />
                    <br />

                    I <span className="tc">love</span> web development since it allows me to express my creativity in 
                    limitless ways, transforming abstract ideas into visually stunning and interactive digital experiences 
                    that captivate and engage others!
                    <br />
                    <br />

                    Outside of web development, you can find me playing volleyball, going on long runs, and hanging out 
                    with my friends!
                    <br />
                    <br />
                    The picture of me has been removed btw since I almost got doxxed with my old one 🤷‍♂️
                </p>


            </div>

            <div className="about-image-holder">
                <img className="about-image" src={mePicture} alt="Image of me (Pranav!)" />
            </div>
        </section>
    ) 
}

export default About