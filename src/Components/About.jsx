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
                <img className="about-image" src="data:image/png;base64,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" alt="Image of me (Pranav!)" />
            </div>
        </section>
    ) 
}

export default About