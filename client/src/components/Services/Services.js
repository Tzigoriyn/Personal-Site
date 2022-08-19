import { Link } from "react-router-dom";

const Services = () => {

    return (
        <section className="site-section section-services" id="services">

            <div className="container-fluid">
                <h2>SERVICES WE OFFER</h2>
                <p className="section-subtitle"><span>Exceptional level of service</span></p>
            </div>
            <div className="container">
                <div className="carousel slide" id="services-carousel">
                    <div className="item-controls text-center">
                        <Link to="#services-carousel" className="left btn carousel-control" data-slide="prev"><i
                            className="fa fa-angle-left" aria-hidden="true"></i>
                        </Link>
                        <Link to="#services-carousel" className="right btn carousel-control" data-slide="next"><i
                            className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="carousel-indicators nav-tabs text-center">
                        <Link data-target="#services-carousel" to="#" data-slide-to="0" className="active">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-laptop" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Web design</p>
                                </div>
                            </div>
                        </Link>
                        <Link data-target="#services-carousel" to="#" data-slide-to="1">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-code" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Web development</p>
                                </div>
                            </div>
                        </Link>
                        <Link data-target="#services-carousel" to="#" data-slide-to="2">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Mobile Development</p>
                                </div>
                            </div>
                        </Link>
                        <Link data-target="#services-carousel" to="#" data-slide-to="3">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">SEO optimization</p>
                                </div>
                            </div>
                        </Link>
                        <Link data-target="#services-carousel" to="#" data-slide-to="4">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Social Media</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-inner">
                        <div id="item1" className="item tab-pane active">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Web Design</h3>
                                        <p>Decorations don’t drive home messages. Content does. Reducing text-based
                                            content to a visual design element (the shape of the text) can result in
                                            bloated and unrealistic client expectations once real data replaces the
                                            dummy content. We allow our design decisions to be dictated by the on-page
                                            content and messaging, and often our designers use the actual content to
                                            inspire interesting elements that might not have been conceived without it
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="assets/img/web-design.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item2" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Web Development</h3>
                                        <p>Once we have come up with a unique design and have finalized the textures and
                                            graphics to be added, the next step is to make it all come together. And
                                            that is what we aim to achieve at our web development agency India. Only a
                                            professionally designed website can justify the uniqueness of your idea and
                                            this is a fact clearly understood by our team. </p>

                                        <p>While a good design can impress the users, it is the codes and development
                                            process that ensures that your target users will find the browsing
                                            experience equally amazing as your design. </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="assets/img/web-development.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item3" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Mobile Development</h3>
                                        <p>With an increasing importance being given to smart phones, and mobile apps,
                                            it has become immensely important to include app development as part of web
                                            design services. Our team is known to provide excellent and extraordinary
                                            apps that are unique in every way. All the apps developed by our team are
                                            based on providing interesting features combined with enhanced
                                            functionality. With a mobile app in place, you can increase the reach of
                                            your brand and broaden its horizons too. You can have an easy to use
                                            professional app created that provides ease of functionality and an amazing
                                            appeal.</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="assets/img/mobile-development.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item4" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">SEO optimization</h3>
                                        <p>Search engine optimization (SEO) is the process of improving the visibility
                                            of a web site in search engines. Consumer puts a lot of trust in search
                                            engines to find what they need. Google receives 34,000 searches per second.
                                            Those searches involve finding products, reviewing brands, and looking up
                                            business locations.</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="assets/img/seo-optimization.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item5" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Social Media</h3>
                                        <p>Social Media, has become an essential tool of marketing an online business.
                                            It gives you a platform to interact and inform people about yourself and
                                            your brand. The concept of social media basically refers to the task of
                                            promoting websites or business through social media platforms..</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="assets/img/social-media.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;