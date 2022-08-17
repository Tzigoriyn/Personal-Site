import { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <div id="top" className="hero background-overlay">
                <div className="hero-content">
                    <h1>I am Ivaylo Lazarov</h1>
                    <p className="hero-job"><span>I'M A CREATIVE JS WEB DEVELOPER AND ENGINEER</span></p>
                    <p className="hero-job-desc">I STAND ON A SWEET SPOT WHERE DESIGN &amp; CODE INTERSECTS. </p>
                </div>
                <div className="hero-arrow page-scroll home-arrow-down">
                    <Link className="" to="/intro"><i className="fa fa-angle-double-down" aria-hidden="true"></i></Link>
                </div>
            </div>
        );
    }
}

export default Top;