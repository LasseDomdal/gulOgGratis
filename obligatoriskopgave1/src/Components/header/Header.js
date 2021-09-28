import './header.css';
import {Link} from "react-router-dom";
import Logo from './home button.jpg';


//props as a function
function Header(props) {

    return (
        <div>
            <Link to="/"><img className="logo" src={Logo}/></Link>
        </div>
    );

}

export default Header;