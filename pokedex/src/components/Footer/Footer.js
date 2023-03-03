import { FooterContainer } from "./Footer.styled";
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
const Footer = () => {
    return ( 
        <FooterContainer className="footer">
            <div>By Luis Franco</div>
            <div className="icon-container">
                <img src={`${linkedin}`}/>
                <img src={`${github}`}/>
                <img src={`${instagram}`} />
            </div>
        </FooterContainer>
     );
}
 
export default Footer;