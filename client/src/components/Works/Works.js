import { Link } from "react-router-dom";

const Work = () => {

    return (
        <section className="site-section section-works" id="works">
            <div className="container">
                <h2>RECENT WORKS</h2>
                <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>

                <div className="portfolio">
                    <ul className="portfolio-sorting list-inline">
                        <li><Link to="#" className=" active" data-group="all">all</Link></li>
                        <li><Link to="#" className="" data-group="webdesign">Web Design</Link></li>
                        <li><Link to="#" className="" data-group="webdev">Web Development</Link></li>
                        <li><Link to="#" className="" data-group="mobileapps">Mobile apps</Link></li>
                    </ul>

                    <div id="grid">


                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdesign"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-1.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem1">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>PSD Template</h3>
                                    <p>Web Design</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdev"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-2.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem2">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>Website</h3>
                                    <p>Web Development</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["mobileapps"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-4.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem3">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>IOS App</h3>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdesign"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-3.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem4">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>PSD Template</h3>
                                    <p>Web Design</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdev"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-5.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem5">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>Wordpress Website</h3>
                                    <p>Web Development</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["mobileapps"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-6.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem6">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>Android App</h3>
                                    <p>Mobile App</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdev"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-7.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem7">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>Woocommerce Website</h3>
                                    <p>Web Development</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 col-xs-6" data-groups='["webdesign"]'>
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumb">
                                    <img src="assets/img/portfolio-8.jpg" alt="" className="img-res" />
                                        <Link to="#" className="rectangle" data-toggle="modal" data-target="#portfolioItem8">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                </div>
                                <div className="portfolio-info">
                                    <h3>PSD Template</h3>
                                    <p>Web Design</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;