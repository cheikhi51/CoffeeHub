import { MdEmail } from "react-icons/md";
import {FaWhatsapp } from "react-icons/fa"; 
import { FaFacebook } from "react-icons/fa";
function Footer(){
    return(
        <div className="footer-section ">
            <p className="pop-up-element">©CoffeeHub 2025</p>
            <div className="quick-links pop-up-element">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#featured">Menu</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="media-icons pop-up-element">
                <MdEmail className="font-icon"/>
                <FaWhatsapp className="font-icon"/>
                <FaFacebook className="font-icon"/>
            </div>
        </div>
    )
}

export default Footer