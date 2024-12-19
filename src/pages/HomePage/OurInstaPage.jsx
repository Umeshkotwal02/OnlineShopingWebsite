import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/OurInstaPage.css";

const OurInstaPage = () => {
    return (
        <Container fluid className="our-stores-section">
            <div className="position-relative mx-auto our-stores-wrapper">
                {/* Background Image */}
                <div className="our-stores-image">
                    <img
                       src={require("../../assets/images/instpage.png")}
                        alt="Our Story"
                        className="img-fluid"
                    />
                </div>
            </div>
        </Container>
    );
};

export default OurInstaPage;
