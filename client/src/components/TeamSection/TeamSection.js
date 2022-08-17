import { Link } from "react-router-dom";

const TeamSection = () => {
    return (
        <section className="site-section section-team" id="team">
            <div className="container">
                <h2>MEET MY TEAM</h2>
                <p className="section-subtitle"><span>This is the team that is working with me</span></p>

                <div className="team">
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="team-member">
                                <div className="flipper">
                                    <div className="team-member-front">
                                        <div className="team-member-thumb">
                                            <img src="assets/img/employee-1.jpg" className="img-res" alt="" />
                                        </div>
                                        <p className="team-member-front-name">DIANA JOHNSON</p>
                                    </div>
                                    <div className="team-member-back">
                                        <div className="team-member-info">
                                            <h3 className="team-member-back-name">DIANA JOHNSON</h3>
                                            <p className="team-member-back-position">Web Designer</p>
                                            <p className="team-member-back-info">Curabitur nulla odio bibendum sit amet
                                                facilisis sed lobortis id, just Donec ollic itudin facil isis nulla.
                                                Donec eget ligula. </p>
                                            <div className="social-icons small">
                                                <Link to="#" className="rectangle"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-linkedin"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="team-member">
                                <div className="flipper">
                                    <div className="team-member-front">
                                        <div className="team-member-thumb">
                                            <img src="assets/img/employee-2.jpg" className="img-res" alt="" />
                                        </div>
                                        <p className="team-member-front-name">ADAM HENRY</p>
                                    </div>
                                    <div className="team-member-back">
                                        <div className="team-member-info">
                                            <h3 className="team-member-back-name">ADAM HENRY</h3>
                                            <p className="team-member-back-position">Web Developer</p>
                                            <p className="team-member-back-info">Curabitur nulla odio bibendum sit amet
                                                facilisis sed lobortis id, just Donec ollic itudin facil isis nulla.
                                                Donec eget ligula. </p>
                                            <div className="social-icons small">
                                                <Link to="#" className="rectangle"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-linkedin"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="team-member">
                                <div className="flipper">
                                    <div className="team-member-front">
                                        <div className="team-member-thumb">
                                            <img src="assets/img/employee-3.jpg" className="img-res" alt="" />
                                        </div>
                                        <p className="team-member-front-name">ROBERT DOE</p>
                                    </div>
                                    <div className="team-member-back">
                                        <div className="team-member-info">
                                            <h3 className="team-member-back-name">ROBERT DOE</h3>
                                            <p className="team-member-back-position">Mobile APP Developer</p>
                                            <p className="team-member-back-info">Curabitur nulla odio bibendum sit amet
                                                facilisis sed lobortis id, just Donec ollic itudin facil isis nulla.
                                                Donec eget ligula. </p>
                                            <div className="social-icons small">
                                                <Link to="#" className="rectangle"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-linkedin"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="team-member">
                                <div className="flipper">
                                    <div className="team-member-front">
                                        <div className="team-member-thumb">
                                            <img src="assets/img/employee-4.jpg" className="img-res" alt="" />
                                        </div>
                                        <p className="team-member-front-name">JULIA BROWN</p>
                                    </div>
                                    <div className="team-member-back">
                                        <div className="team-member-info">
                                            <h3 className="team-member-back-name">JULIA BROWN</h3>
                                            <p className="team-member-back-position">Seo Specialist</p>
                                            <p className="team-member-back-info">Curabitur nulla odio bibendum sit amet
                                                facilisis sed lobortis id, just Donec ollic itudin facil isis nulla.
                                                Donec eget ligula. </p>
                                            <div className="social-icons small">
                                                <Link to="#" className="rectangle"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-linkedin"></i></Link>
                                                <Link to="#" className="rectangle"><i className="fa fa-dribbble"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;