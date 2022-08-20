import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { username } = useContext(AuthContext);

    return (
        <header id="masthead" className="site-header">
            <nav id="primary-navigation" className="site-navigation" data-spy="affix">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#portfolio-perfect-collapse" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="page-scroll site-logo">
                            <Link to="/top">Ivaylo</Link>
                        </div>
                    </div>
                    <div className="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">
                        {username ?
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll"><Link to="/top">Home</Link></li>
                                <li className="page-scroll"><Link to="/intro">Intro</Link></li>
                                <li className="page-scroll"><Link to="/about">About</Link></li>
                                <li className="page-scroll"><Link to="/services">Services</Link></li>
                                <li className="page-scroll"><Link to="/team">Team</Link></li>
                                <li className="page-scroll"><Link to="/history">History</Link></li>
                                <li className="page-scroll"><Link to="/works/all">Works</Link></li>
                                <li className="page-scroll"><Link to="/contact">Contact</Link></li>
                                <li className="page-scroll"><Link to="/logout">Logout</Link></li>
                            </ul> :
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll"><Link to="/register">Register</Link></li>
                                <li className="page-scroll"><Link to="/login">Login</Link></li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Header;