import { useState, useRef, useEffect } from "react";
import "../FreAcc/FreAcc.css";

const FreAcc = ({ question, answer }) => {
  // State to track whether the accordion item is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Ref to access the answer container DOM element
  const answerRef = useRef(null);

  // Effect to adjust the max-height of the answer container based on the open/close state
  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        answerRef.current.style.maxHeight =
          answerRef.current.scrollHeight + "px";
      } else {
        answerRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  return (
    <div className={`freAcc-container ${isOpen ? "Mr-FreActive" : ""}`}>
      
      {/* Accordion header: Displays the question and the toggle button */}
      <div className="freAcc-header">
        <h3 className="fs-22-6">{question}</h3>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src={
              isOpen
                ? "/Little-learners/faq/minus.svg"
                : "/Little-learners/faq/plus.svg"
            }
            alt={isOpen ? "Collapse" : "Expand"}
          />
        </button>
      </div>

      {/* Accordion content: Contains the answer, shown or hidden with animation */}
      <div ref={answerRef} className="freAcc-answer">
        <hr />
        <p className="fs-20">{answer}</p>
      </div>
    </div>
  );
};

export default FreAcc;
