import { FooterContainer } from "./Footer.styled";
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github-icon.png"
import instagram from "../../assets/instagram.png"
const Footer = () => {
    return ( 
        <FooterContainer className="footer">
            <div>Connect with me to stay in touch</div>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/luis-f-216513181/">
                    <img src={`${linkedin}`} alt="linked-in icon"/>
                </a>
                <a href="https://github.com/LuisFranco12/Pokemon">
                    <img src={`${github}`} alt="github icon"/>
                </a>
                <a href="https://www.instagram.com/" alt="instagram icon">
                    <img src={`${instagram}`} alt="instagram icon"/>
                </a>
            </div>
        </FooterContainer>
     );
}
 
export default Footer;