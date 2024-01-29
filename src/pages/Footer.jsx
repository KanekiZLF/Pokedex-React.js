import React from "react";
import '../styles/Footer.css'
import LogoGitHub from  '../imgs/logo-github.svg'
import LogoLinkedIn from '../imgs/logo-linkedin.svg'

const Footer = () => {
    return (
        <footer id="footer">
                <div id="aboutCreator">
                    <p>&copy; Desenvolvido por Luiz F. R. Pimentel.</p>
                </div>

                <div id="socialIcons">
                    <a href="https://github.com/KanekiZLF" target="_blank" rel="noopener noreferrer">
                        <img src={LogoGitHub} alt="Link GitHub" srcset="" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/luiz-fernando-rocha-pimentel/" target="_blank" rel="noopener noreferrer">
                        <img src={LogoLinkedIn} alt="Link LikedIn" srcset="" />
                    </a>
                </div>  
        </footer>
    );
};

export default Footer;