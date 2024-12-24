import React, { useState, useEffect } from "react";
import { Accordion, Button, Card, Col, Row, Form, FormControl, Container, Dropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ProductFilter from "./ProductFilter";

const ProductPage = () => {
  // Static data for product and filter details
  const [productPageDetails, setProductPageDetails] = useState([
    {
      id: 1,
      name: "Lehenga Wedding Dress",
      price: 500,
      category: "Wedding",
      description: "A beautiful lehenga for weddings.",
    },
    {
      id: 2,
      name: "Saree",
      price: 200,
      category: "Traditional",
      description: "A traditional saree for celebrations.",
    },
    // Add more products here as required
  ]);

  const [filterOptions, setFilterOptions] = useState([
    {
      name: "category",
      title: "Category",
      data: [
        { value: "Wedding", label: "Wedding" },
        { value: "Traditional", label: "Traditional" },
      ],
    },
    {
      name: "price",
      title: "Price Range",
      data: [
        { value: "low", label: "Low" },
        { value: "high", label: "High" },
      ],
    },
  ]);

  const [appliedfilterData, setAppliedFilterData] = useState({ category: [], price: [] });
  const [selectedSortValue, setSelectedSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const handleNavigate = () => {
    // Navigation logic
  };

  const handleCheckboxChange = (key, value) => {
    const updatedFilters = { ...appliedfilterData };
    if (updatedFilters[key]?.includes(value)) {
      updatedFilters[key] = updatedFilters[key].filter((val) => val !== value);
    } else {
      updatedFilters[key] = [...(updatedFilters[key] || []), value];
    }
    setAppliedFilterData(updatedFilters);
    // Trigger re-fetch or filter change
  };

  const clearFilters = () => {
    setAppliedFilterData({ category: [], price: [] });
    // Reset product data
  };

  // Rendering the product details using static data
  const renderProducts = () => {
    return productPageDetails.map((product) => (
      <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Price: ${product.price}</strong></Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container className="my-4">
      <Row>
        <Col lg={3}>
          <h3>Filter</h3>
          {filterOptions.map((filter, index) => (
            <Accordion key={index} defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{filter.title}</Accordion.Header>
                <Accordion.Body>
                  {filter.data.map((option, idx) => (
                    <Form.Check
                      key={idx}
                      type="checkbox"
                      label={option.label}
                      checked={appliedfilterData[filter.name]?.includes(option.value)}
                      onChange={() => handleCheckboxChange(filter.name, option.value)}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}

          <ProductFilter/>
          <Button variant="secondary" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </Col>

        <Col lg={9}>
          <h3>Lehenga Wedding Dresses Collection</h3>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <Button variant="outline-secondary" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
            <div>
              <span>Sort by:</span>
              <Dropdown onSelect={(eventKey) => setSelectedSortValue(eventKey)}>
                <Dropdown.Toggle variant="secondary" id="sort-dropdown">
                  {selectedSortValue || "Select"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="price-asc">Price (Low to High)</Dropdown.Item>
                  <Dropdown.Item eventKey="price-desc">Price (High to Low)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <Row>
            {renderProducts()}
          </Row>

          <div className="pagination">
            <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>{currentPage}</span>
            <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(productPageDetails.length / pageSize)}>
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
