function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3>Front-End Development</h3>
          <p>I specialize in creating engaging and responsive user interfaces using React, HTML, CSS...</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <i className="fa-solid fa-database"></i>
          <h3>Back-End Development</h3>
          <p>I have experience building scalable and secure back-end systems using Node.js...</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Full-Stack Development</h3>
          <p>As a full-stack developer, I combine my knowledge of front-end and back-end technologies...</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
