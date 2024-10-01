import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form validation and submission
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    setSuccessMessage("Your message has been sent successfully!");
    setErrorMessage("");
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h2>Contact Us</h2>

        <div className="contact-info">
          <p>We’d love to hear from you! Reach out with any inquiries or reservation requests.</p>
          <ul className="contact-details">
            <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@restaurant.com">info@restaurant.com</a></li>
            <li><strong>Address:</strong> 123 Main St, Cityville</li>
            <li><strong>Opening Hours:</strong> Mon-Sat: 11:00 AM - 10:00 PM</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="message">Message or Inquiry</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

          <button type="submit" className="btn btn-primary mt-4">
            Send Message
          </button>
        </form>

        <div className="map-container mt-5">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=..."  // Use your actual Google Maps embed URL
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
