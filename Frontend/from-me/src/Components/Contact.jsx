import Navbar from './Navbar';
import { useState } from "react";
import '../Styles/ContactForm.css';


function Contact() {
    const [currentColor, setCurrentColor] = useState('transparent');
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // We'll implement this later
    console.log('Form submitted:', formData);
 
     // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
 
  return (
    <>
    <div className={`${currentColor} min-vh-100`}>
        <Navbar
      currentColor={currentColor}
      changeColor={setCurrentColor}
    />
    <div id="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Tell us more about your inquiry..."
          />
        </div>
 
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      </div>
    </div>
    </>
  );
}
 
export default Contact;