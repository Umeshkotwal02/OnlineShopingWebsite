import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap"; // Use React-Bootstrap components

const Faq = () => {
  // Static data for FAQ
  const faqData = [
    {
      page_title: "What is React?",
      page_description:
        "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.",
    },
    {
      page_title: "What is an Accordion?",
      page_description:
        "An accordion is a UI element that allows you to expand and collapse sections of content.",
    },
    {
      page_title: "How do I use React Bootstrap?",
      page_description:
        "You can use React Bootstrap by installing it and importing the required components into your project.",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleAccordionChange = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <Accordion>
        {faqData?.map((item, index) => {
          const id = "faqs" + index;
          return (
            <Card key={id} className="my-2.5 shadow-none border border-secondary rounded-3">
              <Accordion.Item eventKey={id}>
                <Accordion.Header
                  onClick={() => handleAccordionChange(id)}
                  className="py-3"
                >
                  <h5>{item?.page_title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{item?.page_description}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Faq;
