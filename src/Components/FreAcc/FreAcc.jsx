import { useState } from "react";
import "../FreAcc/FreAcc.css";

const FreAcc = ({ question, answer }) => {
  // State to track whether the accordion item is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`freAcc-container ${isOpen ? "Mr-FreActive" : ""}`}>
      
      {/* Accordion header: Displays the question and the toggle button */}
      <div className="freAcc-header">
        <h3 className="fs-22-6">{question}</h3>
        <button onClick={() => setIsOpen(prev => !prev)}>
          <img
            src={isOpen ? "/Little-learners/faq/minus.svg" : "/Little-learners/faq/plus.svg"}
            alt={isOpen ? "Collapse" : "Expand"}
          />
        </button>
      </div>

      {/* Accordion content: Contains the answer */}
      {isOpen && (
        <div className="freAcc-answer">
          <hr />
          <p className="fs-20">{answer}</p>
        </div>
      )}

    </div>
  );
};

export default FreAcc;
