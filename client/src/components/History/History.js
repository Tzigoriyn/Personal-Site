const History = () => {

    return (
        <section className="section-history" id="history">
            <div className="container">
                <div className="text-center section-diff-title">
                    <h2>A Look Back At Our History</h2>
                    <p>This my Education and Experience</p>
                </div>

                <ul className="timeline">

                    <li className="timeline-start">
                        <div className="rectangle"><span>2016</span></div>
                    </li>


                    <li>
                        <div className="rectangle timeline-rectangle"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <div className="timeline-date">
                                    <p>13 sep</p>
                                </div>
                                <div className="timeline-position">
                                    <p>Web design &amp; Development</p>
                                </div>
                            </div>
                            <div className="timeline-body">
                                <div className="timeline-body-thumb">
                                    <img src="assets/img/timeline-img.jpg" className="img-res" alt="" />
                                </div>
                                <p>Designing and developing a Wordpress Website</p>
                            </div>
                        </div>
                    </li>


                    <li className="timeline-start">
                        <div className="rectangle"><span>2017</span></div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="rectangle timeline-rectangle"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <div className="timeline-position">
                                    <p>Web Design</p>
                                </div>
                                <div className="timeline-date">
                                    <p>5 Jan</p>
                                </div>
                            </div>
                            <div className="timeline-body">
                                <div className="timeline-body-thumb">
                                    <img src="assets/img/timeline-img.jpg" className="img-res" alt="" />
                                </div>
                                <p>Designing a solution for mobile app</p>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="rectangle timeline-rectangle"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <div className="timeline-date">
                                    <p>25 Aug</p>
                                </div>
                                <div className="timeline-position">
                                    <p>Seo Optimization</p>
                                </div>
                            </div>
                            <div className="timeline-body">
                                <div className="timeline-body-thumb">
                                    <img src="assets/img/timeline-img.jpg" className="img-res" alt="" />
                                </div>
                                <p>SEO optimizing a couple of websites</p>
                            </div>
                        </div>
                    </li>


                    <li className="timeline-end">
                        <div className="rectangle"><span>More</span></div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default History;