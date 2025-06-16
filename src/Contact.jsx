function Contact(){

    return(
        <div className="contact-section" id="contact">
            <h1 className="section-title">Contact Us</h1>
            <form className="contact-form">
                <h2 className="form-title">Get In Touch</h2>
                <input className="contact-input" name="username" placeholder="Username..."/>
                <input className="contact-input" name="email" placeholder="Email..."/>
                <textarea className="contact-input" name="message" placeholder="Message..."/>
                <button className="send-btn">Send</button>
            </form>
        </div>
    )

}

export default Contact;