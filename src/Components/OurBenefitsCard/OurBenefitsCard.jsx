import "./OurBenefitsCard.css"; 

const OurBenefitsCard = ({icon, title, desc}) => {
  return (
    <>
      {/* Main container for the benefits card */}
      <div className='Mr-benefitsCardContainer'>
        
        {/* Container for the icon */}
        <div className='Mr-iconBenefits'>
          <img src={icon} alt="icon" />
        </div>

        {/* Title of the benefits card */}
        <h3 className='Mr-benefitsTitle fs-28'>{title}</h3>

        {/* Description text of the benefits card */}
        <p className='Mr-benefitsDesc fs-20'>{desc}</p>

      </div>
    </>
  )
}

export default OurBenefitsCard; 