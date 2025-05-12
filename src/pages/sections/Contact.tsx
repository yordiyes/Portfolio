import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    user_phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  interface FormData {
    user_name: string;
    user_email: string;
    subject: string;
    user_phone: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8xo5ry5",
        "template_hcb84jj", 
        e.target as HTMLFormElement, 
        "nMCyRpR3wS6-keWMA"
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setIsSent(true);
          setIsError(false);
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            user_phone: "",
            message: "",
          }); 
        },
        (error) => {
          console.log("Error:", error.text);
          setIsError(true);
          setIsSent(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form
        id="contact-form"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="input-box">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message ...."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>

      {isSent && <p>Your message has been sent successfully!</p>}
      {isError && <p>There was an error sending your message. Please try again.</p>}
    </section>
  );
}

export default Contact;
