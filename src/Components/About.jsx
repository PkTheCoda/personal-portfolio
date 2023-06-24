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
                <img className="about-image" src="https://mail.google.com/mail/u/0?ui=2&ik=9317aff34c&attid=0.1.1&permmsgid=msg-f:1769539555192333719&th=188eaad99b3de597&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8DYXN8XVv_rt_xUgtNvjZ1OIOXAlE3g77K5VnsASoTuQ8ykYDuI6UTDqWdPfNSXmakVJpzPDQubMqIOpuRlv4PG7gUF1MG9gbXSbeepHNEBFBkoYkuCRCd5Zo&disp=emb" alt="Image of me (Pranav!)" />
            </div>
        </section>
    ) 
}

export default About