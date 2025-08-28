import { useState } from "react";
import Accordion from "../Accordion/Accordion";
import TagManager from "../TagManager/TagManager";

const data = [
  {
    label: "Accordion1",
    description: "Some description for Accordion1",
  },
  {
    label: "Accordion2",
    description: "Some description for Accordion2",
  },
  {
    label: "Accordion3",
    description: "Some description for Accordion3",
  },
];
const tags = [
  "First tag",
  "second tag",
  "third tag",
  "fourth tag",
  "movie tag",
  "actions tag",
  "films tag",
];

const App = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleChangeAccordion = (indx: number) => {
    setActiveAccordion(indx);
  };
  return (
    <div>
      {data.map((el, index) => (
        <Accordion
          key={el.label}
          label={el.label}
          description={el.description}
          onAccordionClick={() => handleChangeAccordion(index)}
          isOpen={activeAccordion === index}
        />
      ))}
      <hr />
      <hr />
      <br />
      <br />

      <TagManager tags={tags} />
    </div>
  );
};

export default App;
