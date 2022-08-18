import { useContext } from 'react';
import OwnerContext from '../contexts/ownerContext';

const ContactUs = () => {
    const {name, email, isOwner} = useContext(OwnerContext);

    // console.log(props);
    // const { isOwner } = ownerInfo;
    // console.log(isOwner);
    return (

        <section className="site-section section-contact" id="contact">
            {!isOwner ?
                <div className="container">
                    <h2>CONTACT US</h2>
                    <p className="section-subtitle"><span>Here i am</span></p>
                    <div className="row">
                        <form>
                            <div className="col-md-4">
                                <input className="form-control" readOnly type="text" placeholder="Name" required value={name || ''} />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" readOnly type="email" placeholder="Email" required value={email || ''} />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" type="text" placeholder="Subject" required />
                            </div>
                            <div className="col-sm-12">
                                <textarea className="form-control" placeholder="Your Message" required />
                            </div>

                            <div className="col-sm-12">
                                <button className="btn btn-inverted">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div> :
                <h2>YOU ARE ONWNER COULD NOT SEND EMAIL TO YOUR SELF!</h2>
            }
        </section>
    );
}

export default ContactUs;