import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-card">
      {" "}
      {/* Add className */}
      <h2>Contact</h2>
      <p>Always open to new opportunities</p>
      <ul>
        <li>
          EmailId:<a href="#">Email</a>
        </li>
        <li>
          Linkedin:
          <a href="#" target="_blank">
            Linkedin
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href=" " target="_blank" rel="noopener noreferrer">
            github
          </a>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Contact;
