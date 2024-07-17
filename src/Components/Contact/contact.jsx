import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // empêche de rafraichissement

  //   emailjs
  //     .sendForm(
  //       "service_k3ygzmk",
  //       "template_5a64cgh",
  //       form.current,
  //       "uqsvi78SbLY9rP-uB"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         // setIsloading(false);

  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const submit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      if (name && email && message) {
        const templateParams = {
          name,

          email,
          message
        };

        emailjs
          .send(
            "service_k3ygzmk",
            "template_5a64cgh",
            // form.current,
            templateParams,
            "uqsvi78SbLY9rP-uB"

            // process.env.REACT_APP_SERVICEID,
            // process.env.REACT_APP_TEMPLATEID,
            // templateParams,
            // process.env.REACT_APP_USERID
          )
          .then((response) => console.log(response))
          .then((error) => console.log(error));

        setName("");

        setEmail("");
        setMessage("");
        alert(t("Contact.email_sent"));
      } else {
        alert(t("Contact.fill_all_fields"));
      }
    } else {
      alert(t("Contact.valid_email"));
    }
  };

  return (
    // return (
    <div className="contact-form">
      <div className="w-left">
        <div className="quoi">
          <span style={{ color: darkMode ? "white" : "" }}>
            {t("Contact.title")}
          </span>
          <span> {t("Contact.subtitle")} </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form onSubmit={submit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder={t("Contact.name_placeholder")}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder={t("Contact.email_placeholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            className="user"
            placeholder={t("Contact.message_placeholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="submit"
            onClick={(e) => submit(e)}
            value="Send"
            className="button"
          />
          <span>{done && t("Contact.success_message")}</span>
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
