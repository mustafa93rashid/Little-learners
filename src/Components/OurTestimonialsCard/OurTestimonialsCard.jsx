import "./OurTestimonialsCard.css";

const OurTestimonialsCard = ({ icon, title, desc }) => {
  return (
    <div className="TestimonialsCardContiner">
      <div >
        <img className="Mr-userImage"  src={icon} alt="" />
      </div>
      <h3 className="fs-24">{title}</h3>
      <div>
        <img src="./Testimonials/Container.svg" alt="" />
      </div>
      <p className="fs-20">{desc}</p>
    </div>
  );
};

export default OurTestimonialsCard;
