import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "../../styles/ProductDetails.css";

const data = [
  {
    id: 1,
    header: "Product Details",
    subHeader: "Care instructions, Pack contains",
    details: [
      { title: "Material", subtitle: "Crepe" },
      { title: "Pattern", subtitle: "Printed" },
      { title: "Fit", subtitle: "Comfortable" },
      { title: "Sleeve Type", subtitle: "Sleeveless" },
      { title: "Care Instructions", subtitle: "Dry Clean Only" },
      { title: "Type of Work", subtitle: "Embellished & Sequined" },
      { title: "Type", subtitle: "Lehenga Choli" },
      { title: "Neckline Type", subtitle: "Scoop Neck" },
      { title: "Closure Type", subtitle: "Back Closure" },
    ],
  },
];

const ProductAllInformation = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Accordion
      activeKey={activeKey}
      onSelect={(key) => setActiveKey(key)}
      className="shadow-none bg-none"
    >
      {data.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={item.id}
          className=""
        >
          <Accordion.Header className="d-flex align-items-center gap-3">
            <img
              src={require("../../assets/images/ProductDetails/boxicon.png")}
              alt=""
              className="object-contain me-2"
              style={{ width: "2.8rem" }}
            />
            <div>
              <div className="fs-5 fw-bold text-black mb-1">{item.header}</div>
              <div className="fs-6 text-secondary">{item.subHeader}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="ps-4">
              <div className="row">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="col-lg-6 col-md-6 col-6 mb-3">
                    <div className="text-black mb-1 font-normal pb-1" style={{ fontSize: "1.2rem" }}>
                      {detail.title}
                    </div>
                    <div className="font-normal" style={{ fontSize: "1.2rem", color: "#555555" }}>{detail.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ProductAllInformation;
