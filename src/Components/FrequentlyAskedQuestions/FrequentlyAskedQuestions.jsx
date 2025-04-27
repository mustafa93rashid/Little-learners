import FreAcc from "../FreAcc/FreAcc";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./FrequentlyAskedQuestions.css";
import { FaqData } from "../../Data/FaqData";

const FrequentlyAskedQuestions = () => {
  // Split the FAQ data into two parts: left and right sides
  const leftSideData = FaqData.slice(0, 4);
  const rightSideData = FaqData.slice(4, 8);

  return (
    <div className="px-162 Mr-margin">
      {/* Section title and description */}

      <TitleComponent
        btnContnet="Solutions For The Doubts"
        title="Frequently Asked Questions"
        descrption="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      {/* Container holding two columns of FAQ items */}
      <div className="Mr-FaqContainer">
        {/* Left side FAQs */}
        <div
          className="Mr-coloum"
          data-aos="fade-up"
     data-aos-duration="3000">
        
          {leftSideData.map((data, index) => (
            <FreAcc key={index} question={data.question} answer={data.answer} />
          ))}
        </div>

        {/* Right side FAQs */}
        <div
          className="Mr-coloum"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        >
          {rightSideData.map((data, index) => (
            <FreAcc key={index} question={data.question} answer={data.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
