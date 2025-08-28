interface AccordionProps {
  label: string;
  description: string;
  isOpen: boolean;
  onAccordionClick: () => void;
}
const Accordion = ({
  label,
  description,
  isOpen,
  onAccordionClick,
}: AccordionProps) => {
  return (
    <div>
      <button onClick={onAccordionClick}>Open details {label}</button>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

export default Accordion;

// import { useState } from "react";

// interface SingleAccordionProps {
//   label: string;
//   description: string;
// }
// const SingleAccordion = ({ label, description }: SingleAccordionProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Open details {label}</button>
//       {isOpen && <p>{description}</p>}
//     </div>
//   );
// };

// export default SingleAccordion;
