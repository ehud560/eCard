import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>
        <footer className="footer bg-dark">
            <NavLink to="/about" className="about"><i className="fa-solid fa-circle-info display-6"></i></NavLink>

        </footer>
    </>);
}

export default Footer;