import OurBenefitsCard from "../OurBenefitsCard/OurBenefitsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./OurBenefits.css";
import { BenefitsData } from "../../Data/BenefitsData";

const OurBenefits = () => {
  // Split the FAQ data into two parts: left and right sides
  const leftSideBenefitsData = BenefitsData.slice(0, 3);
  const rightSideBenefitsData = BenefitsData.slice(3, 6);

  return (
    <div className="px-162">
      {/* Section title with a button label, main title, and description */}
      <TitleComponent 
        btnContnet="Children Deserve Bright Future"
        title="Our Benefits"
        descrption="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />

      {/* Container for all benefit cards */}
      <div className="Mr-benefitsAllCard">
        <div className="Mr-benfitRow" data-aos="zoom-in-up">
          {leftSideBenefitsData.map((data, index) => (
            <OurBenefitsCard
              key={index}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
        <div className="Mr-benfitRow" data-aos="zoom-in-down">
        {rightSideBenefitsData.map((data, index) => (
          <OurBenefitsCard
            key={index}
            icon={data.icon}
            title={data.title}
            desc={data.desc}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
