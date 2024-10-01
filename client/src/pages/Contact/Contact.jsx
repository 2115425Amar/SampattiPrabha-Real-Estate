import React from "react";
import "./Contact.scss";

const Contact = () => {
  const members = [
    {
      id: 2,
      name: "Amar Gupta",
      image: "https://res.cloudinary.com/lamadev/image/upload/v1727354738/avatars/wxgbjgyueiw3wp2xetsk.jpg",
      mobile: "+91 8601082965",
      email: "amar8601082@gmail.com",
    },
    {
      id: 1,
      name: "Ramest Gupta",
      image: "https://via.placeholder.com/150",
      mobile: "+91 6388099423",
      email: "ramestgupta1234@gmail.com",
    }
  ];

  return (
    <div className="contact-container">
      {members.map((member) => (
        <div key={member.id} className="contact-card">
          <img src={member.image} alt={member.name} className="contact-image" />
          <h2 className="contact-name">{member.name}</h2>
          <p className="contact-info">Mobile: {member.mobile}</p>
          <p className="contact-info">Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
