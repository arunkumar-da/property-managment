import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SolutionStep() {
  // Define an array of objects containing titles and descriptions
  const steps = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" }
    // Add more items as needed
  ];

  return (
    <div>
      {steps.map((step, index) => (
        <div className="about-text-step" key={index}>
          <p className="about-text-sTitle">
            <span>
              <FontAwesomeIcon className="fa-icon" icon={faChevronDown} />{" "}
              {step.title}
            </span>
          </p>
          <p className="about-text-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SolutionStep;
