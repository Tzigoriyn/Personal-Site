import { NavLink } from 'react-router-dom';

const WorkNav = () => {
    return (
        <ul className="portfolio-sorting list-inline">
            <li><NavLink to="/works/all" className="" data-group="all">all</NavLink></li>
            <li><NavLink to="/works/webdesign" className="" data-group="webdesign">Web Design</NavLink></li>
            <li><NavLink to="/works/webdev" className="" data-group="webdev">Web Development</NavLink></li>
            <li><NavLink to="/works/mobileapps" className="" data-group="mobileapps">Mobile apps</NavLink></li>
        </ul>
    );
}

export default WorkNav;