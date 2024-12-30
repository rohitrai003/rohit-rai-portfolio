import './Contact.css';

export function Contact() {
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or have any questions, feel free to reach out!</p>
        <form className="contact-form">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <textarea placeholder="Write Your Message Here..." required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }

