import React, { useState } from 'react';
import './accordion.css'; // Import the CSS file for styling

const Accordion = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" >
      <button className="accordion-header" onClick={toggleAccordion}
      style={{backgroundColor:"white"}}>
        {header}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
