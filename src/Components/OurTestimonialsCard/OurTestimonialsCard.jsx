import "./OurTestimonialsCard.css";

const OurTestimonialsCard = ({ icon, title, desc }) => {
  return (
    <div className="TestimonialsCardContiner">
      
      {/* User image */}
      <div>
        <img className="Mr-userImage" src={icon} alt="User" />
      </div>

      {/* User name or title */}
      <h3 className="fs-24">{title}</h3>

      {/* Decorative container background (optional visual element) */}
      <div>
        <img src="/Little-learners/Testimonials/Container.svg" alt="Container Decoration" />
      </div>

      {/* Testimonial text/description */}
      <p className="fs-20">{desc}</p>
    </div>
  );
};

export default OurTestimonialsCard;
