import React, { useState } from "react";
import "../CSS/Contact.css";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email" className="contact-form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message" className="contact-form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-form-textarea"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="contact-form-button">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="support">
        <div className="support-text">
          <svg
            className="support-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#fff"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224-99.6 224-222 0-59.3-23-115.6-60.9-157.9z"
            />
          </svg>
          <p>Contact us for support</p>
        </div>
      </div>

      <footer>
        <p>&copy; allrights reserved 2024</p>
      </footer>
      </div>  
  );
};

export default Contact;
