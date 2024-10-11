import React, { useState } from "react";
import "../CSS/Contact.css";

/* Interface voor formuliergegevens */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/* Contact component */
const Contact: React.FC = () => {
  /* Formulier data en submit status */
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Behandel veldwijzigingen */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Behandel formulierverzending */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* Simuleer formulierverzending */
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    /* Contactpagina layout */
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      {/* Formulier */}
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

        {/* Verzendknop */}
        <button type="submit" disabled={isSubmitting} className="contact-form-button">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* WhatsApp ondersteuning */}
      <div className="support">
        <div className="support-text">
          <span>If you still have a question, we can help you!</span>
        </div>
        <button className="whatsapp-button-1">
          <a href="#">WhatsApp us</a>
        </button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; all rights reserved 2024</p>
      </footer>
    </div>
  );
};

export default Contact;