import "./Contact.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useRef, useState} from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = async (e) => {
    if(!form.current.checkValidity()){
      return;
    }
    e.preventDefault();

    const serviceId = "service_ldblbi5";
    const publicKey = "LWdbUs1XmhmNVxpUZ";
    const templateId = "template_nerml2w";

    var data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        user_name: name,
        user_email: email,
        message: message,
        to_name :"Rohit Rai"
      }
  };
    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(response.data);
      alert("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Message failed to send");
      console.log(error);
    }
    };
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          If you'd like to work together or have any questions, feel free to
          reach out!
        </p>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Write Your Message Here..."
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" value={"Send"}>
            Send
          </button>
        </form>
      </section>
    );
  };

