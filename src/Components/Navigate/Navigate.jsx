import NavigateCard from "../NavigateCard/NavigateCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Navigate.css";
import { NavigateData } from "../../Data/NavigateData";

const Navigate = () => {
  return (
    <div className="px-162">
      <TitleComponent
        btnContnet="Explore More"
        title="Navigate through our Pages"
        descrption="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />

      <div className="Mr-navigateSectionContiner">
        {NavigateData.map((data, index) => (
          <NavigateCard key={index} title={data.title} desc={data.desc} />
        ))}
      </div>
    </div>
  );
};

export default Navigate;
