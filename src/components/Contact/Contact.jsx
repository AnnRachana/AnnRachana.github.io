import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_zo2b6jl",
        "template_nkuondr",
        form.current,
        "40xoc2NRyEtdVmqWx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        id="contactForm"
      >
        <div className="contact-row">
          <div className="contact-col column-1">
            <div className="contactTitle">
              <h2>Contact Me</h2>
              <p>
                Need to get in touch with us? Either fil out the form with your
                inquiry or find the department emaill you'd like to contact
                below.
              </p>
            </div>
            <div className="form-1">
              <div className="inputGroup">
                <input type="text" name="from_name" required="required" />
                <label>Full Name</label>
              </div>

              <div className="inputGroup">
                <input type="email" name="from_email" required="required" />
                <label>example@gmail.com</label>
              </div>
            </div>

            <div className="contactSocialMedia">
              <a href="https://www.facebook.com/profile.php?id=100026367046442">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/AnnRachana/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/ann.rachanaa/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/AnnRachNa">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="contact-col column-2">
            <div className="form-2">
              <div className="inputGroup">
                <textarea required="required" name="message" />
                <label>Your Message</label>

                <input type="submit" value="SUBMIT" className="form-button" />
              </div>
              {/* <button className="form-button" type="submit" value="Send">
                MESSAGE ME
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
