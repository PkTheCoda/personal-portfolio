import React from "react";

function Contact() {


    return (
        <>
            <h1 className="projects--title"> <span className="checkpoint-num">04</span> Let's get <span className="tc">in Touch</span></h1>
            <section className="contact--wrapper" id="contact">
                <h2 className="contact-title-text">
                I'd love to get in contact with you! Whether you just want to discuss something, 
                build a project together, or something else, I'm always available for contact!
                I'll normally get back to you within 24 hours!
                </h2>                   
                <div className="image-icon-items"> 
                    <a href="https://github.com/PkTheCoda">
                        <img className="icon-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="image of github logo" />
                    </a>         

                    <a href="https://www.linkedin.com/in/pranav-konjeti-0ba48a25b/">
                    <img className="icon-img" src="https://logodix.com/logo/79688.ico" alt="image of linkedin logo" />
                    </a>   

                    <a href="mailto:pranavkonjeti@gmail.com">
                        <img className="icon-img" src="https://static.vecteezy.com/system/resources/previews/020/169/233/original/envelope-icon-email-or-incoming-message-mail-icon-for-web-computer-and-mobile-app-message-envelope-line-art-icon-for-apps-and-websites-free-vector.jpg" alt="email icon" />
                    </a>                             
                </div>                        
            </section>
        </>
    )
}

export default Contact