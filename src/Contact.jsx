import { useState, useEffect } from "react";

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [sendMessage, setSendMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const handFormDataChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const handFormDataSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(formData.name === "" || formData.email === "" || formData.message === ""){
            setErrorMessage(true);
        } else {
            setSendMessage(true);
        }
    }
    
    useEffect(() => {
        if (sendMessage) {
            const SuccessTimer = setTimeout(() => {
                setSendMessage(false);
            }, 3000); 
            
            return () => clearTimeout(SuccessTimer);
        }
    }, [sendMessage]); 

    
    useEffect(() => {
        if (errorMessage) {
            const ErrorTimer = setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
            
            return () => clearTimeout(ErrorTimer);
        }
    }, [errorMessage]);

    return(
        <div className="contact-section" id="contact">
            <h1 className="section-title">Contact Us</h1>
            <form className="contact-form" onSubmit={handFormDataSubmit}>
                <h2 className="form-title">Get In Touch</h2>
                <input className="contact-input" name="name" type="text" value={formData.name} placeholder="Username..." onChange={handFormDataChange}/>
                <input className="contact-input" name="email" type="email" value={formData.email} placeholder="Email..." onChange={handFormDataChange}/>
                <textarea className="contact-input" name="message" type="text" value={formData.message} placeholder="Message..." onChange={handFormDataChange}/>
                <button className="send-btn" type="submit">Send</button>
            </form>
            {sendMessage &&
                <div className="success-form-message fade-in-element"> Data sent successfully </div>
            }
            {errorMessage &&
                <div className="error-form-message fade-in-element"> Please fill in the form</div>
            }
        </div>
    )
}

export default Contact;