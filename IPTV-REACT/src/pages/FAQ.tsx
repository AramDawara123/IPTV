import React, { useState } from "react";
import "../CSS/FAQ.css";

// Interface voor FAQ-items (vraag en antwoord)
interface FAQItem {
  question: string;
  answer: string;
}

// Array met FAQ-data
const faqData: FAQItem[] = [
  { question: "Available payment methods?", answer: "We accept various payment methods including credit cards, PayPal, and bank transfers." },
  { question: "Which devices can be used for IPTV?", answer: "IPTV can be used on smart TVs, computers, smartphones, tablets, and streaming devices like Roku or Amazon Fire TV Stick." },
  { question: "Recommended internet speed?", answer: "We recommend a minimum internet speed of 10 Mbps for SD content and 25 Mbps for HD content." },
  { question: "Which countries are present?", answer: "Our service is available in multiple countries. Please check our coverage page for a full list." },
  { question: "How many connections at once?", answer: "Our standard package allows for up to 3 simultaneous connections." },
  { question: "How can I test the IPTV service?", answer: "We offer a 12-hour free trial. Contact our support team to get started." },
];

// FAQ component
const FAQ: React.FC = () => {
  // State om bij te houden welke FAQ actief is
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Functie om een FAQ-item te tonen of te verbergen
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions (FAQ)</h1>
      {faqData.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
          </div>
          <div className="faq-answer">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;