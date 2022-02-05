import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <form
        autocomplete="off"
        target="_blank"
        action="https://formsubmit.co/cheijlman@roc-dev.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Enter Your Name" required />
        <input
          type="email"
          placeholder="Enter a valid email"
          name="email"
          required
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows="10"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
