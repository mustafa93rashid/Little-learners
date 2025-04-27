import HeroRank from "../HeroRank/HeroRank";
import "./Hero.css";
import { heroContent } from "../../Data/HeroData"; 

const Hero = () => {
  return (
    
    <div className="Mr-heroContainer px-162 " data-aos="zoom-in-down">
    {/* Hero image */}
    <img 
      src="/Little-learners/Hero/Image Container.jpg" 
      className="MR-heroImg" 
      alt="" 
    />

    {/* Text content section */}
    <div>
      <div>
        {/* Upper title / subtitle */}
        <span className="MR-heroUpperTitle fs-22">
          {heroContent.upperTitle}
        </span>

        {/* Main title with a highlighted span */}
        <h1 className="MR-heroTitle fs-54">
          {heroContent.title} <span>{heroContent.span}</span>
        </h1>

        {/* Description paragraph */}
        <p className="MR-heroPargraph fs-20">
          {heroContent.paragraph}
        </p>
      </div>

      {/* Ranks or icons below the paragraph */}
      <HeroRank />
    </div>
  </div>
);
};

export default Hero;
