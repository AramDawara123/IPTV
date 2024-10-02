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
    </div>
  );
};

export default Contact;
