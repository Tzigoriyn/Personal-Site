import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="colophon" className="site-footer">

            <div className="container-fluid">

                {/* <!-- Carousel
================================================== -->
    <section id="mainCarousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <div className="carousel-inner">
                <div className="item active">
                    <script src="http://maps.googleapis.com/maps/api/js">
                    </script>
                    <script>
                        var myCenter = new google.maps.LatLng(42.604342677270814, 23.031532028272505);
                        var marker;
                        function initialize() {
                            var mapProp = {
                                center: myCenter,
                                zoom: 15,
                                // mapTypeId: google.maps.MapTypeId.ROADMAP
                            };
                            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                            marker = new google.maps.Marker({
                                position: myCenter,
                                // icon:'themes/assets/images/nepali-momo.png',
                                animation: google.maps.Animation.BOUNCE
                            });

                            marker.setMap(map);

                            // Info open
                            var infowindow = new google.maps.InfoWindow({
                                content: "Hello World!"
                            });

                            google.maps.event.addListener(marker, 'click', function () {
                                infowindow.open(map, marker);
                            });
                        }
                        google.maps.event.addDomListener(window, 'load', initialize);
                    </script>
                    <div id="googleMap" style="height:450px;"></div>
                </div>
            </div>
    </section><!-- /.carousel -->*/}
                <div className="page-scroll">
                    <Link to="/top" className="rectangle">
                        <i className="fa fa-angle-double-up"></i>
                    </Link>
                </div>

            </div>

            <div className="container text-center">
                <p className="copyright">&copy; <Link to="https://softuni.bg/" target="_blank">Tzigoriyn</Link> - 2022</p>
            </div>

        </footer>
    );
}

export default Footer;