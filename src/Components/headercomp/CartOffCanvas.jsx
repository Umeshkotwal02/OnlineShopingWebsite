// Login.jsx
import React from 'react';
import { Offcanvas, Button, Row, Col } from 'react-bootstrap';
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CartOffCanvas = ({ show, handleClose }) => {

    const items = [
        {
            id: 1,
            name: "Pink Ethnic",
            description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
            price: "₹5,400",
            originalPrice: "₹10,999",
            discount: "50% off",
            quantity: 1,
            img: "https://s3-alpha-sig.figma.com/img/7cd0/655e/1798e57a8f8db2bfd19e7f556d0f666d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCwRAjyroAzRPX32fVy0TPpeRFiVOBcP~WRxiKECJiCk6rFVMldRKbtp3SOvwmIBXHH5CiILxOmHIwqTg6DyZMAgXDM40sMgybmGa2MDkeX~A7-cXmKDcol-fyGb0pnz3DlPG1wRhYJREUNyIjlrqeWfY72rJEFxPc6A0rKo~Ax0TNwAcneOHXlNO0s4im7nmdaXUsHzvX1mWVedCsXZQsAlVLTLnhFckM3IfeoQxLDg0BnwcqqOxeWSMdyFA9wpUvVHGCZ6IWAHlSykvNZ-l-eHzV7oe8Fn9Vl94jadBUlWxpeJw6RrC0YI0Ux9R1UJilY6hZEu7o47COj1Qv9eqQ__",
        },
        {
            id: 2,
            name: "Attire In Pink Tone ...",
            description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
            price: "₹5,400",
            originalPrice: "₹10,999",
            discount: "50% off",
            quantity: 1,
            img: "https://s3-alpha-sig.figma.com/img/3432/c5a9/f8d0ffa14f99c130b369f4bf614526dd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZ-aerW-SoPaEuvC6UwglLX6ftXa5Hx95-Wj9f1diR9HKDxE59xBYx2VKLI8XzsNy3cL0vXU6R6W89O9HbgMIWJla6YCl~Nu7NQvqNUS3ywRUo3qzcJCxCsTmrqPHMde5pBUEOQsoZGHMhzoTnXORr8wW9ECQwKOA2rW0pUUa~cUVmYJlUmzc3ILMLYcKbE~qmG6TyFh05nMAkrSq~QaCPdiWq~rtvUzzkGiz1jd31425ZLs3qOQY4uedR6hygHZTI8V~YKFMzV07Op~Pzrkkp3C0aKH86NNZrd7PDPcipwSiEHl2rnWlhrlGxA~paDqhmvBxZWlAO29mtmdn5dPTw__",
        },
        {
            id: 3,
            name: "Attire In Pink Tone ...",
            description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
            price: "₹5,400",
            originalPrice: "₹10,999",
            discount: "50% off",
            quantity: 1,
            img: "https://s3-alpha-sig.figma.com/img/01da/ab47/0593d3faaefdc04b00bc466e7363e9b3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXtuxHiR3i7WPLfTku1JAsdjKjqdorYPO3pV4jPNvpm~uNfSiBQ8Z6CHryUFPQk-AYTRQAz2r9m1WMtG2PYCmZ2uGONJfUB93tPgF0tm6KeX5SF6G3FzZkto8UBO7qw8oYOCTEGdpgOwyW1cS1qL0sG7Z3E8zzFyuua6rhSvHGBB8syGmjsZSddBTguLx5fvOFag3WoImjXmJULhUvq4kOzohV1OjgIEtvcWJhCFqRGge3UScdivGmhllcGeLKx2daQPeHmDtgfzOADfsHn44VBYGTHNdsKZif8u1rmtM-auPYOwX-l61sf-62nw7yXfSOlKxeUpvqpHsRkfKSD~hw__",
        },
    ];

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" style={{ maxWidth: '450px' }}>
            <Offcanvas.Header closeButton className="custom-header web-bg-color">
                <Offcanvas.Title className='text-start fw-bold fs-5'>Bag</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="d-flex rounded mb-3 pt-2 position-relative web-bg-color"
                    >
                        <div className="rounded">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="rounded"
                                style={{ width: "120px", height: "130px", objectFit: "contain" }}
                            />
                        </div>
                        <div className="flex-grow-1">
                            <Button
                                variant="light"
                                className="position-absolute top-0 end-0 p-1"
                                size="sm"
                            >
                                <FaTimes />
                            </Button>
                            <p className="m-0  cart-para">{item.name}</p>
                            <p className="text-muted small cart-para">{item.description}</p>
                            <div className="d-flex align-items-center gap-2">
                                <span className="fw-bold text-secondary">Qty:</span>
                                <div className="d-flex align-items-center border rounded p-1">
                                    <Button variant="light" size="sm" className="p-0">
                                        <FaChevronLeft className="text-secondary" />
                                    </Button>
                                    <span className="px-2">{item.quantity}</span>
                                    <Button variant="light" size="sm" className="p-0">
                                        <FaChevronRight className="text-secondary" />
                                    </Button>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <span className="text-success fw-bold me-2">{item.price}</span>
                                <span className="text-muted text-decoration-line-through me-2">
                                    {item.originalPrice}
                                </span>
                                <span className="text-danger small">{item.discount}</span>
                            </div>

                        </div>
                    </div>
                ))}

            </Offcanvas.Body>
            {/* Sticky Footer */}


            <div
                className="position-sticky bottom-0 start-0 w-100 bg-white py-3"
                style={{ zIndex: 1050, backgroundColor: "#fff" }}
            >
                <Row>
                    <Col xxl={4} xl={4} lg={4}>
                        <div className="text-center mb-2 ">
                            <h5 className="my-2 fw-bold align-self-center">₹16,200</h5>
                        </div>
                    </Col>
                    <Col xxl={7} xl={7} lg={7}>
                        <button
                            className="btn text-white text-center w-100 fw-medium py-1"
                            href="/choose-address"
                            style={{ backgroundColor: "#B51B3B" }}
                        >
                            Proceed to Buy
                        </button>
                    </Col>
                </Row>
            </div>
        </Offcanvas >
    );
};

export default CartOffCanvas;
