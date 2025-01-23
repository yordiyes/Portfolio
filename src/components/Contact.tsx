function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form id="contact-form" method="post">
        <div className="input-box">
          <input type="text" name="user_name" placeholder="Full Name" required />
          <input type="email" name="user_email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="text" name="subject" placeholder="Email Subject" required />
          <input type="number" name="user_phone" placeholder="Phone Number" required />
        </div>
        <textarea name="message" cols={30} rows={10} placeholder="Your Message ...." required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;
