import "./HeroRank.css";
import CountUp from "react-countup";

const HeroRank = () => {
  return (
    <div className="MR-counterContainer">

      {/* First counter: Total number of students */}
      <div>
        <h3 className="fs-44">

          +{/* Plus symbol for stylistic emphasis */}
          <CountUp start={0} end={7000} duration={12} />{" "}

          {/* Animate from 0 to 7000 over 3 seconds */}
        </h3>
        
        <p className="fs-18">Students Passed Out</p>
      </div>

      {/* Second counter: Number of awards */}
      <div>
        <h3 className="fs-44">
          +
          <CountUp start={0} end={37} duration={12} />
        </h3>
        <p className="fs-18">Awards & Recognitions</p>
      </div>

      {/* Third counter: Number of experienced educators */}
      <div>
        <h3 className="fs-44">
          +
          <CountUp start={0} end={15} duration={12} />
        </h3>
        <p className="fs-18">Experience Educators</p>
      </div>
    </div>
  );
};

export default HeroRank;
