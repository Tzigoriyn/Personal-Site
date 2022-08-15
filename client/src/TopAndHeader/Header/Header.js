const Header = () => {

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
                            <a href="#top">Ivaylo</a>
                        </div>
                    </div>
                    <div className="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="page-scroll"><a href="#top">Home</a></li>
                            <li className="page-scroll"><a href="#intro">Intro</a></li>
                            <li className="page-scroll"><a href="#about">About</a></li>
                            <li className="page-scroll"><a href="#services">Services</a></li>
                            <li className="page-scroll"><a href="#team">Team</a></li>
                            <li className="page-scroll"><a href="#history">History</a></li>
                            <li className="page-scroll"><a href="#works">Works</a></li>
                            <li className="page-scroll"><a href="#contact">Contact</a></li>
                            <li className="page-scroll"><a href="#register">Register</a></li>
                            <li className="page-scroll"><a href="#login">Login</a></li>
                            <li className="page-scroll"><a href="#logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;