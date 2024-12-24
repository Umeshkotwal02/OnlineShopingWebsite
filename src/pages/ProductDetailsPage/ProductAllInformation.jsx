import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";


const ProductAllInformation = () => {
  // Static data
  const productAllInfo = {
    variation: [
      { label: "Color", value: "Red" },
      { label: "Size", value: "Medium" },
      { label: "Material", value: "Cotton" },
    ],
    product_all_detail:
      "This product is made of 100% organic cotton and comes in a variety of colors and sizes. It is soft, breathable, and perfect for everyday wear.",
  };

  const policy = {
    return_and_exchange_policy:
      "You can return or exchange your product within 30 days of purchase. The product must be unused and in original packaging to qualify for a return or exchange.",
  };

  // State to control which accordion panel is expanded
  const [expanded, setExpanded] = useState("panel1");

  // Handle Accordion expansion
  const handleChangeAccordion = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      <h5 className="text-lg font-weight-bold mb-2 text-black">Product Information</h5>

      <Accordion activeKey={expanded}>
        {/* Product Details Accordion */}
        <Card className="border-bottom">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="panel1"
            onClick={() => handleChangeAccordion("panel1")(expanded !== "panel1")}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/accordion-box.png"
                alt="Product Details"
                className="w-8 h-8"
                loading="lazy"
              />
              <div>
                <h4 className="font-weight-medium text-black pb-2">Product Details</h4>
                <p className="text-muted">Care instructions, Pack contains</p>
              </div>
            </div>
            <FaAngleDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="panel1">
            <Card.Body>
              <div className="pl-3">
                <div className="row">
                  {productAllInfo?.variation?.map((item, index) => (
                    <div key={item?.label + index} className="col-6 mb-3">
                      <h5 className="font-weight-normal text-black mb-1">{item?.label}</h5>
                      <p className="text-muted">{item?.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* Know Your Product Accordion */}
        <Card className="border-bottom">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="panel2"
            onClick={() => handleChangeAccordion("panel2")(expanded !== "panel2")}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/accordionicon3.png"
                alt="Know Your Product"
                className="w-8 h-8"
                loading="lazy"
              />
              <div>
                <h4 className="font-weight-medium text-black pb-2">Know Your Product</h4>
                <p className="text-muted">Description</p>
              </div>
            </div>
            <FaAngleDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="panel2">
            <Card.Body>
              <p className="text-muted">{productAllInfo?.product_all_detail}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        {/* Return and Exchange Policy Accordion */}
        <Card className="border-bottom">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="panel4"
            onClick={() => handleChangeAccordion("panel4")(expanded !== "panel4")}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/accordion4.png"
                alt="Return and Exchange Policy"
                className="w-8 h-8"
                loading="lazy"
              />
              <div>
                <h4 className="font-weight-medium text-black pb-2">Return and Exchange Policy</h4>
                <p className="text-muted">Know more about return and exchange</p>
              </div>
            </div>
            <FaAngleDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="panel4">
            <Card.Body>
              <p className="text-muted text-justify">{policy?.return_and_exchange_policy}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ProductAllInformation;
