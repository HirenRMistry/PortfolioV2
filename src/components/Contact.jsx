import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

export default function Contact({ data }) {
  const { contactmessage } = data || {};
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your own email service (e.g. EmailJS, Formspree) here.
    setStatus('success');
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">{contactmessage}</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="contactName">Name <span className="required">*</span></label>
          <input id="contactName" name="name" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Email <span className="required">*</span></label>
          <input id="contactEmail" name="email" type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactSubject">Subject</label>
          <input id="contactSubject" name="subject" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="contactMessage">Message <span className="required">*</span></label>
          <textarea id="contactMessage" name="message" rows={6} required />
        </div>

        <Button type="submit" colorScheme="blue" size="lg">Send Message</Button>

        {status === 'success' && (
          <p className="form-success"><i className="fa fa-check" /> Message sent — thank you!</p>
        )}
        {status === 'error' && (
          <p className="form-error">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
