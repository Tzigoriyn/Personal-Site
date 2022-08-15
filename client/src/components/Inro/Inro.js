const Inro = () => {

    return (
        <section className="site-section section-hello" id="intro">
            <div className="container">
                <h2>HELLO &amp; WELCOME</h2>
                <p className="section-subtitle"><span>EXPLORE OUR WORLD</span></p>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="main-service text-right">
                            <div className="rectangle">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                            </div>
                            <h3>We Meet Deadlines</h3>
                            <p>Your deadline is the most important value for us. Our job is to make sure the job is done
                                perfectly before the deadline.</p>
                        </div>
                        <div className="main-service text-right">
                            <div className="rectangle">
                                <i className="fa fa-comments" aria-hidden="true"></i>
                            </div>
                            <h3>Communication Is Key</h3>
                            <p>Our team is available to check on your questions and take in feedback as soon as
                                possibly.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="big-rectangle">
                            <img src="https://firebasestorage.googleapis.com/v0/b/personal-site-project-6b514.appspot.com/o/ivo-logo.png?alt=media&token=73e529f7-d49e-4f28-b185-be654628d621"
                                alt="john-logo1" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="main-service text-left">
                            <div className="rectangle">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <h3>Quality Control</h3>
                            <p>We test out everything to make sure that your project is fully functional, cross–browser
                                compatible and meets your specifications.</p>
                        </div>
                        <div className="main-service text-left">
                            <div className="rectangle">
                                <i className="fa fa-list" aria-hidden="true"></i>
                            </div>
                            <h3>Pixel Perfect</h3>
                            <p>We develop meaningful digital products and experiences that matter with design thinking
                                and creative craftsmanship.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inro;