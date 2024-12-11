import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Map = () => {



    // Popular Search
    const links = [
        "Party wear Saree", "Saree for farewell", "Wedding Special", "Reception Outfit",
        "Wedding Guest", "Wedding Guest", "Sangeet Outfit", "Teenagers lehenga",
        "Saree for Ganesh Chaturthi", "Marathi Wedding saree", "Diwali Special Outfit",
        "Party Wear Outfit", "Navratri Special Outfit", "Ruffle Sarees", "Kanjivaram Saree",
        "Haldi Outfit", "Mehendi Outfit", "Cocktail & Bachelor Party Outfit",
        "Ready to Wear Saree", "Reception Gown", "Celebrity Outfit’s", "Party Wear Sharara Suit"
    ];

    return (
        <Container fluid>
            <Row className="w-100 mx-auto" style={{ backgroundColor: "#E3FCFF" }}>
                <h2 className="we-serve-title text-center">
                    We Serve 56 Countries
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="assets/images/world-map.png"
                        style={{ width: '60%' }}
                        width="1000"
                        alt="world-map"
                        loading="lazy"
                    />
                </div>
            </Row>
            <Row className="w-100 text-decoration-none">
                <div className=" mx-auto px-3 text-center">
                    <h4 className="text-xl leading-none fw-bolder font-jots text-black mb-4">
                        POPULAR SEARCHES
                    </h4>
                    <div className="flex flex-wrap justify-center gap-x-1 ">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                className="text-decoration-none text-black "
                                href="/product-page"
                            >
                                {link} |
                            </a>
                        ))}
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Map;
