import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import "./contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // empêche de rafraichissement

    emailjs
      .sendForm(
        "service_k3ygzmk",
        "template_5a64cgh",
        form.current,
        "uqsvi78SbLY9rP-uB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // setIsloading(false);

          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    // return (
    <div className="contact-form">
      <div className="w-left">
        <div className="quoi">
          <span style={{ color: darkMode ? "white" : "" }}>
            N'hésitez plus !{" "}
          </span>
          <span> Contactez-moi </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Nom"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && " Merci pour votre message, à bientôt !"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
