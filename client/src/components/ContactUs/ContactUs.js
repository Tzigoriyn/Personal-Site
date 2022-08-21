import { useContext, useRef } from 'react';
import OwnerContext from '../contexts/ownerContext';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = ({
    history
}) => {
    const { name, email, isOwner } = useContext(OwnerContext);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kgp4rfg', 'template_05wfwyg', form.current, 'sugy-i6wRQfve_ExY')
            .then(() => {
                alert('You sended message seccessful');
                history.push('/intro');
            }, (error) => {
                alert(error.message);
            });
    };
    return (

        <section className="site-section section-contact" id="contact">
            {!isOwner ?
                <div className="container">
                    <h2>CONTACT US</h2>
                    <p className="section-subtitle"><span>Here i am</span></p>
                    <div className="row">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="col-md-4">
                                <input className="form-control" name="to_name" readOnly type="text" placeholder="Name" required defaultValue={name} />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" name="from_name" readOnly type="email" placeholder="Email" required defaultValue={email} />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" name="from_name" type="text" placeholder="Subject" required />
                            </div>
                            <div className="col-sm-12">
                                <textarea className="form-control" name="message" placeholder="Your Message" required />
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