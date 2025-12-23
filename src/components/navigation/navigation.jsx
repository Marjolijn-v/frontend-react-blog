import './navigation.css'
import {NavLink} from "react-router-dom";
import logo_medium from "../../assets/logo_medium.png";

function Navigation() {
    return (
        <nav>
            <div className="image-wrapper">
                <img src={logo_medium} alt="blogventure logo"/>
            </div>
            <ul className="nav-bar">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to="/overzicht" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                    Alle posts
                </NavLink></li>
                <li><NavLink to="/nieuw" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                    Nieuwe post
                </NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;