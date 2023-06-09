import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var city = data.address.city;
    var state = data.address.state;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="contact">
        <p>{contactName}</p>
        <a target="_blank" href={`mailto:${contactEmail}`}><FontAwesomeIcon icon={faEnvelope} /> {contactEmail}</a>
        <br />
        <p><FontAwesomeIcon icon={faHome} /> {city}, {state}</p>
        <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
      </div>
    </section>
  );
};

export default Contact;
