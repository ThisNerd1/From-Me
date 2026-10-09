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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  const validateForm = () => {
    const newErrors = {};
 
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
 
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
 
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
 
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
 
    return newErrors;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
 
    // Clear errors as user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    const formErrors = validateForm();
     
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
 
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('');
 
    try {
      // We'll implement the API call here
      console.log('Sending form data:', formData);
       
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
       
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      {submitStatus === 'success' && (
        <div className="success-message">
          Thank you! Your message has been sent successfully.
        </div>
      )}
       
      {submitStatus === 'error' && (
        <div className="error-message">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}
 
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
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
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
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
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
            className={errors.subject ? 'error' : ''}
          />
          {errors.subject && <span className="error-text">{errors.subject}</span>}
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
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
 
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
    </>
  );
}
 
export default Contact;