import React from "react";

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

                </p>


            </div>

            <div className="about-image-holder">
                <img className="about-image" src="https://static.wixstatic.com/media/71b053_5949f95c55dc41d8a24cbbbee9bdfd69~mv2.jpg/v1/fill/w_635,h_501,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PranavMugShot.jpg" alt="Image of me (Pranav!)" />
            </div>
        </section>
    ) 
}

export default About