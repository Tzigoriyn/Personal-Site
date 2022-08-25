import { Link } from 'react-router-dom';

const ConnectMe = () => {
    return (
        <section className="section-background section-twitter background-overlay text-center">
            <div className="container">
                <div className="rectangle">
                    <i className="fa fa-linkedin"></i>
                </div>
                <p>Latest from Linkedin</p>
                <p>So here’s how you can integrate sign up and sign in for your web and iOS apps, with AWS Cognito.</p>
                <Link to="" className="btn btn-inverted">follow me</Link>
            </div>
        </section>
    );
}

export default ConnectMe;