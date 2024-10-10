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
          <svg
            className="support-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="40"
            height="40"
          >
            <path
              fill="#25D366"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224-99.6 224-222 0-59.3-23-115.6-60.9-157.9zm-157 306.8h-.1c-30.3 0-60.1-8-86.3-23.2l-6.2-3.7-63.1 16.5 16.8-61.5-4.1-6.6c-18.2-29.3-27.8-63.2-27.8-98.1 0-100.7 82-182.8 182.9-182.8 48.9 0 94.8 19 129.5 53.7 34.7 34.7 53.8 80.7 53.8 129.5 0 100.7-82.1 182.8-183 182.8zm101.6-138.4c-5.5-2.8-32.7-16.1-37.8-17.9-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.9-17.5 21.6-6.4 4.2-11.8 1.4c-32.7-16.3-54.2-29.2-76.1-66.2-5.8-10 5.8-9.3 16.3-30.9 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.3-4.5-10.9-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.7 6.9-5.1 5.5-19.3 19-19.3 46.2s19.8 53.7 22.6 57.4c2.8 3.7 38.9 59.4 94.6 83.4 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.7-13.4 37.3-26.3 4.5-12.8 4.5-23.7 3.2-26.2-1.2-2.5-5.1-3.9-10.6-6.7z"
            />
          </svg>
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