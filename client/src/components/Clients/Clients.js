const Clients = () => {
    return (
        <section className="site-section section-reviews text-center">
            <div className="container">
                <h2>Client Reviews</h2>
                <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>
            </div>

            <div className="blue-bg">
                <div className="container">
                    <div className="review-carousel">

                        <div className="review">
                            <div className="rectangle">
                                <img src="assets/img/review.jpg" className="img-res" alt="" />
                            </div>
                            <p>If there were 100 star rating I would leave 110. I have been building WP sites now full
                                time for 7 years and in business for 12 and have never worked with such a solid company
                                with such a wonderful set of themes.</p>
                            <div className="review-author">
                                <h3>Mike Taylor</h3>
                                <p>CEO at Sports Portal</p>
                            </div>
                        </div>

                        <div className="review">
                            <div className="rectangle">
                                <img src="assets/img/review-2.jpg" className="img-res" alt="" />
                            </div>
                            <p>Diana Johnson is a rare SEO consultant who does things the right way. I’ve been
                                consistently impressed with her process, organization and strategic method of doing SEO
                                the right way.</p>
                            <div className="review-author">
                                <h3>Anna Murray</h3>
                                <p>CEO at Law firm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients