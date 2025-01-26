import  { useState } from 'react';

function Services() {
  // State to manage which service is expanded
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Services data
  const services = [
    {
      id: 1,
      icon: 'fa-solid fa-code',
      title: 'Front-End Development',
      shortDescription: 'I specialize in creating engaging and responsive user interfaces using React, HTML, CSS...',
      fullDescription: 'I specialize in creating engaging and responsive user interfaces using React, HTML, CSS, and JavaScript. My work focuses on building interactive web experiences and ensuring optimal performance across devices.',
    },
    {
      id: 2,
      icon: 'fa-solid fa-database',
      title: 'Back-End Development',
      shortDescription: 'I have experience building scalable and secure back-end systems using Node.js...',
      fullDescription: 'I have experience building scalable and secure back-end systems using Node.js, Express, and databases like MongoDB. I focus on developing RESTful APIs and ensuring smooth communication between front-end and back-end systems.',
    },
    {
      id: 3,
      icon: 'fa-solid fa-laptop-code',
      title: 'Full-Stack Development',
      shortDescription: 'As a full-stack developer, I combine my knowledge of front-end and back-end technologies...',
      fullDescription: 'As a full-stack developer, I combine my knowledge of front-end and back-end technologies to deliver end-to-end solutions. I enjoy collaborating on projects that require handling both client-side and server-side development.',
    },
  ];

  // Toggle function to handle "Read More" state
  const toggleReadMore = (id: number | null) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="services-box" key={service.id}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>
              {expandedService === service.id
                ? service.fullDescription
                : service.shortDescription}
            </p>
            <button
              onClick={() => toggleReadMore(service.id)}
              className="btn"
            >
              {expandedService === service.id ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
