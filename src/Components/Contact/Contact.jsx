import React from 'react';
import './Contact.css';
import thm from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import phn from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d6e34859-fad1-469f-bd46-c1003c08b188");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='Contact' id='contact'>
            <div className="Contactt">
                <h1>Get in Touch</h1>
                <img src={thm} alt="" />
            </div>
            <div className="Contacts">
                <div className="ContactL">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias esse nostrum vitae.</p>
                    <div className="Contact-details">
                        <div className="ContactDetail">
                            <img src={mail} alt="" /> <p>Guptaakshuu@gmail.com</p>
                        </div>
                        <div className="ContactDetail">
                            <img src={location} alt="" /> <p>Pune</p>
                        </div>
                        <div className="ContactDetail">
                            <img src={phn} alt="" /> <p>9770132467</p>
                        </div>
                    </div>
                </div>
                <form className="ContactR" onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <label htmlFor="message">Enter Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button className="ContactSubmit" type='submit'>Submit Now</button>
                </form>
            </div>
            {result && <p>{result}</p>}
        </div>
    );
};

export default Contact;
