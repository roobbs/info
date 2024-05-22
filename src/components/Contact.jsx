import "../styles/Contact.css";
import React, { useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_334b0jl", "contact_form", form.current, {
        publicKey: "caVOFSlbrk5t_5IoO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contactSection">
      <Title title={"Contact me"}></Title>
      <div className="contactContainer">
        <div className="contactInfo">
          <div>Don't be shy, and leave me a message :)</div>
          <div className="info">
            <MdEmail size={30} className="icon" />
            <div>carlossalmeroncabrera@gmail.com</div>
          </div>
          <a
            className="info"
            href="https://github.com/roobbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="icon" />
            <div>roobbs</div>
          </a>
          <div className="info">
            <FaLinkedin
              size={30}
              className="icon"
              href="https://linkedin.com/in/carlos-salmeron/"
              target="_blank"
              rel="noopener noreferrer"
            />
            <div>Carlos Salmerón</div>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Name" name="user_name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="user_email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <button type="sumbit">Send</button>
        </form>
      </div>
    </section>
  );
}
