import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const data = [
  {
    id: 1,
    header: "Product Details",
    subHeader: "Care instructions, Pack contains",
    details: [
      { title: "Beige", subtitle: "Color" },
      { title: "Jimmy Choo", subtitle: "Fabric" },
    ],
  },
  // Add more accordion items if needed
];

const ProductAllInformation = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Accordion
      activeKey={activeKey}
      onSelect={(key) => setActiveKey(key)}
      className="border-b border-gray-600 shadow-none"
    >
      {data.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={item.id}
          className="!border-b !border-gray-600"
        >
          <Accordion.Header className="flex items-center gap-4">
            <img
              src="/images/accordion-box.png"
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
              loading="lazy"
            />
            <div>
              <h4 className="text-lg font-medium leading-none capitalize text-black">
                {item.header}
              </h4>
              <p className="text-sm text-gray-600">{item.subHeader}</p>
            </div>
            <FaChevronDown className="ml-auto text-gray-500" />
          </Accordion.Header>
          <Accordion.Body>
            <div className="pl-8">
              <div className="flex flex-wrap">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="w-1/2 px-3 pb-3">
                    <h5 className="text-lg font-normal capitalize text-black mb-1.5">
                      {detail.title}
                    </h5>
                    <p className="text-sm capitalize text-gray-600">
                      {detail.subtitle}
                    </p>
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
