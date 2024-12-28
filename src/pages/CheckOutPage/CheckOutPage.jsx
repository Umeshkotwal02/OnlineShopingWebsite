import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { Row, Col, Container } from "react-bootstrap";
import Payment from "./Payment";
import AddressCard from "./AddressCard";
import { WalletIcon } from "../../assets/SvgIcons";

const steps = [
  { id: "SignUp", label: "Sign Up", icon: <IoIosCheckmark className="fs-1" />, isActive: true },
  { id: "Address", label: "Address", icon: <GoPencil className="fs-5" />, isActive: false },
  { id: "Payment", label: "Payment", icon: <WalletIcon />, isActive: false },
];

const CheckOutPage = () => {
  const [activeTab, setActiveTab] = useState("Address");

  const handleTabClick = (stepId) => {
    if (stepId !== "SignUp") {
      setActiveTab(stepId);
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "Address":
        return <AddressCard />;
      case "Payment":
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row className="w-100 align-items-center mb-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <Col
              className={`d-flex align-items-center gap-2 ${step.id === "SignUp" || activeTab === step.id ? "text-dark" : "text-muted"
                }`}
              onClick={() => handleTabClick(step.id)}
              style={step.id === "SignUp" ? { cursor: "pointer" } : {}}
            >
              <div
                className={`d-flex align-items-center justify-content-center rounded-circle ${step.id === "SignUp"
                  ? "bg-dark text-white"
                  : activeTab === step.id
                    ? "bg-dark text-white"
                    : "bg-secondary text-white"
                  }`}
                style={{ width: "40px", height: "40px" }}
              >
                {step.icon}
              </div>
              <span className="fs-5 fw-medium">{step.label}</span>
            </Col>
            {index < steps.length - 1 && (
              <Col>
                <span
                  className="d-block w-100"
                  style={{
                    height: "3px",
                    backgroundColor: activeTab === steps[index + 1]?.id ? "black" : "rgba(150, 150, 150, 1)",
                  }}
                />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
      <div>{renderActiveView()}</div>
    </Container>
  );
};

export default CheckOutPage;
