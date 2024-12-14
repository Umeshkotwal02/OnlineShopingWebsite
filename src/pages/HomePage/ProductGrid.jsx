import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./ProductCard.css"

const ProductGrid = () => {
  return (
    <Row>
      <Col >
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={require("../../assets/images/CategoryByShopSlicks/LEHENGA.png")}
            style={{ objectFit: 'fill', height: '200px', width: '100%' }}
            alt="Card image"
          />
          <div className='inCtgBanner'>
            <h4 className='mb-2 mb-sm-4'> Hello</h4>
          </div>
        </Card>
      </Col>

      <Col>
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={require("../../assets/images/CategoryByShopSlicks/LEHENGA.png")}
            style={{ objectFit: 'fill', height: '200px', width: '100%' }}
            alt="Card image"
          />
          <div className='inCtgBanner'>
            <h4 className='mb-2 mb-sm-4'> Hello</h4>
          </div>
        </Card>
      </Col>

      <Col>
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={require("../../assets/images/CategoryByShopSlicks/LEHENGA.png")}
            style={{ objectFit: 'fill', height: '200px', width: '100%' }}
            alt="Card image"
          />
          <div className='inCtgBanner'>
            <h4 className='mb-2 mb-sm-4'> Hello</h4>
          </div>
        </Card>

      </Col>
      <Col>
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={require("../../assets/images/CategoryByShopSlicks/LEHENGA.png")}
            style={{ objectFit: 'fill', height: '200px', width: '100%' }}
            alt="Card image"
          />
          <div className='inCtgBanner'>
            <h4 className='mb-2 mb-sm-4'> Hello</h4>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="shadow">
          <Card.Img
            variant="top"
            src={require("../../assets/images/CategoryByShopSlicks/LEHENGA.png")}
            style={{ objectFit: 'fill', height: '200px', width: '100%' }}
            alt="Card image"
          />
          <div className='inCtgBanner'>
            <h4 className='mb-2 mb-sm-4'> Hello</h4>
          </div>
        </Card>
      </Col>
    </Row>

  );
}

export default ProductGrid;
