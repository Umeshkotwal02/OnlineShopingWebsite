import React, { useState } from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';

const ProductFilter = () => {
  const [activeKey, setActiveKey] = useState("0"); // State to manage which accordion is open

  // Static data array to be mapped for checkboxes
  const styles = [
    { id: 1, name: "Abstract Patterns" },
    { id: 2, name: "Floral Patterns" },
    { id: 3, name: "Animal" },
    { id: 4, name: "Bird Motifs" },
  ];

  // Toggle the active key to open/close the accordion
  const handleToggle = () => {
    setActiveKey(activeKey === "0" ? null : "0"); // Toggles between opening and closing the filter
  };

  return (
    <Accordion activeKey={activeKey} onSelect={handleToggle}>
      <Card>
        <Accordion.Header as={Button} variant="link" eventKey="0" className="accordion-btn">
          <div className="d-flex justify-content-between">
            <span className="text-base font-weight-bold">Style</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path fill="#000" fillRule="evenodd" d="M6 12a1.2 1.2 0 0 1 1.2-1.2h9.6a1.2 1.2 0 1 1 0 2.4H7.2A1.2 1.2 0 0 1 6 12Z" clipRule="evenodd"></path>
              </svg>
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="bg-light p-4">
            <Form>
              <div className="accordion-list max-h-52 overflow-y-auto d-flex flex-column">
                {styles.map(style => (
                  <Form.Check
                    key={style.id}
                    type="checkbox"
                    label={style.name}
                    className="text-base font-weight-normal text-black mb-2"
                    style={{ color: 'rgb(233, 177, 89)' }}
                  />
                ))}
              </div>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ProductFilter;
