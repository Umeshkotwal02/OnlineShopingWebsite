import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaTruckFast } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import "../assets2/sass/productpage.scss"

function ProductListing() {

  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newHandleClose = () => setNewShow(false);
  const newHandleShow = () => setNewShow(true);

  const productsImg = [
    {
      thubImg: require('../assets2/Img/white_saree_with_floral_embroidery_and_unstitched_bl-sg214451_17_.jpg'),
      hoverImg: require('../assets2/Img/white_saree_with_floral_embroidery_and_unstitched_bl-sg214451_19_.jpg'),
      name: 'White Saree With Floral Embroidery And Unstitched Blouse Piece',
      price: 5995,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/white_floral_printed_saree_in_satin-sg185461_6_.jpg'),
      hoverImg: require('../assets2/Img/white_floral_printed_saree_in_satin-sg185461_8_.jpg'),
      name: ' White Floral Printed Saree In Satin With Unstitched Blouse Piece ',
      price: 3995,
      ready: true,
      best: false
    },
    {
      thubImg: require('../assets2/Img/white_and_pink_printed_cotton_kurta_pant_set-sg231764_7_.jpg'),
      hoverImg: require('../assets2/Img/white_and_pink_printed_cotton_kurta_pant_set-sg231764_5_.jpg'),
      name: 'White And Pink Printed Cotton Kurta Pant Set',
      price: 3799,
      ready: true,
      best: false
    },
    {
      thubImg: require('../assets2/Img/black_pant_set_in_chiffon_with_zardozi_work_kurta-sg207799_7_.jpg'),
      hoverImg: require('../assets2/Img/black_pant_set_in_chiffon_with_zardozi_work_kurta-sg207799_5_.jpg'),
      name: 'Black Pant Set In Chiffon With Zardozi Work Kurta',
      price: 12990,
      ready: false,
      best: false
    },
    {
      thubImg: require('../assets2/Img/off_white_floral_embroidered_jacket_kurta_set-sg186548_4_.jpg'),
      hoverImg: require('../assets2/Img/off_white_floral_embroidered_jacket_kurta_set-sg186548_7_.jpg'),
      name: 'Off White Floral Embroidered Jacket Kurta Set',
      price: 10799,
      ready: true,
      best: false
    },
    {
      thubImg: require('../assets2/Img/green_embroidered_choli_with_printed_chiffon_lehenga-sg220510_12_.jpg'),
      hoverImg: require('../assets2/Img/green_embroidered_choli_with_printed_chiffon_lehenga-sg220510_12_.jpg'),
      name: 'Green Embroidered Choli With Printed Chiffon Lehenga And Net Dupatta',
      price: 21219,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/yellow_floral_shell_work_silk_co_ord_set-sg221588_8_.jpg'),
      hoverImg: require('../assets2/Img/yellow_floral_shell_work_silk_co_ord_set-sg221588_6_.jpg'),
      name: 'Yellow Floral Shell Work Silk Co Ord Set',
      price: 4679,
      ready: false,
      best: true
    },
    {
      thubImg: require('../assets2/Img/peacock_blue_saree_in_satin_with_embellishments_and_unstitched_blo-sg199280_8_.jpg'),
      hoverImg: require('../assets2/Img/peacock_blue_saree_in_satin_with_embellishments_and_unstitched_blo-sg199280_5_.jpg'),
      name: 'Peacock Blue Saree In Satin With Embellishments And Unstitched Blouse Piece',
      price: 5995,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/_green_saree_with_swarovski_stone_embellishments-sg199274_8_.jpg'),
      hoverImg: require('../assets2/Img/_green_saree_with_swarovski_stone_embellishments-sg199274_6_.jpg'),
      name: 'Green Saree With Swarovski Stone Embellishments',
      price: 6995,
      ready: true,
      best: false
    },
    {
      thubImg: require('../assets2/Img/green_floral_printed-sg177306_6_.jpg'),
      hoverImg: require('../assets2/Img/green_floral_printed-sg177306_5_.jpg'),
      name: 'Green Floral Printed Anarkali Suit Set In Silk',
      price: 6990,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/red_sequin_embellished_kurta-sg181090_4_.jpg'),
      hoverImg: require('../assets2/Img/red_sequin_embellished_kurta-sg181090_3_.jpg'),
      name: 'Red Sequin Embellished Kurta Palazzo Set',
      price: 11990,
      ready: false,
      best: true
    },
    {
      thubImg: require('../assets2/Img/blue_jacket_kurta_set_with_floral_motif_embroidery-sg186516_4_.jpg'),
      hoverImg: require('../assets2/Img/blue_jacket_kurta_set_with_floral_motif_embroidery-sg186516_8_.jpg'),
      name: 'Blue Jacket Kurta Set With Floral Motif Embroidery',
      price: 9999,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/blue_fusion_jacket_kurta-sg178678_4_.jpg'),
      hoverImg: require('../assets2/Img/blue_fusion_jacket_kurta-sg178678_7_.jpg'),
      name: 'Blue Fusion Jacket Kurta Set with Cutwork',
      price: 13499,
      ready: true,
      best: false
    },
    {
      thubImg: require('../assets2/Img/blue_chanderi_pleated_kurta_set-sg179793_5_.jpg'),
      hoverImg: require('../assets2/Img/blue_chanderi_pleated_kurta_set-sg179793_2_.jpg'),
      name: 'Blue Chanderi Pleated co ord set With Belt',
      price: 2092,
      ready: true,
      best: true
    },
    {
      thubImg: require('../assets2/Img/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_8_.jpg'),
      hoverImg: require('../assets2/Img/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_7_.jpg'),
      name: 'Pink Chiffon Saree With Floral Prints And Unstitched Blouse Piece',
      price: 5995,
      ready: false,
      best: true
    },
    {
      thubImg: require('../assets2/Img/pink_tissue_saree_with_unstitched_blouse-sg213857_3_.jpg'),
      hoverImg: require('../assets2/Img/pink_tissue_saree_with_unstitched_blouse-sg213857_11_.jpg'),
      name: 'Pink Tissue Saree With Unstitched Blouse',
      price: 9995,
      ready: true,
      best: true
    },
  ]

  return (
    <div className='productPage pt-3 pb-5'>
      <Container>
        <Row>
          <Col className='col-0 col-lg-2 ps-0'>
            <div className='d-flex d-lg-none fixedBtn'>
              <Button variant=" filterBtn text-uppercase fw-bold" onClick={handleShow}>
                Filter
              </Button>
              <Button variant="sortBtn text-uppercase fw-bold" onClick={newHandleShow}>
                Sort
              </Button>
            </div>
            {/* OffCanvas Content Start */}
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filters</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='d-grid p-0 ff-lexend'>
                  {/* Filter List Start */}
                  <Accordion defaultActiveKey="1" alwaysOpen className='customAccordian'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Genders</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Female <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Male <span className='ps-1 text-secondary'>13</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>₹0 - ₹8,300 <span className='ps-1 text-secondary'>49</span></Link>
                        <Link to={'/products'}>₹8,300 - ₹16,600 <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>₹16,600 - ₹24,900 <span className='ps-1 text-secondary'>4</span></Link>
                        <div className='d-flex priceFilter align-items-center w-100'>
                          <span>₹</span>
                          <input type="number" placeholder='From' className='p-2' />
                          <span>-</span>
                          <input type="number" placeholder='To' className='p-2' />
                        </div>
                        <Link to={'/products'} className='applyBtn fs-16'>Apply</Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Product Category</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Suits <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Saree <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Lehenga <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Gown <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Kuti <span className='ps-1 text-secondary'>85</span></Link>
                        <Link to={'/products'}>Mens <span className='ps-1 text-secondary'>76</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Sub Categories</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Anarkali Suits <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Crop Top Pants <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Kurta Set With Dupattas <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Palazzo Suits <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Sharara Suits <span className='ps-1 text-secondary'>85</span></Link>
                        <Link to={'/products'}>Bandhani Sareee <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Printed Sareee <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Embroidered Sareee <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Banarasi Sareee <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Men Kurta Set <span className='ps-1 text-secondary'>76</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Color</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Black <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Blue <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Pink <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Maroon <span className='ps-1 text-secondary'>45</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Fabric</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Banarasi silk <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Chiffon <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Cotton <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Cotton silk <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Crepe <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Linen <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Net <span className='ps-1 text-secondary'>12</span></Link>
                        <Link to={'/products'}>organza <span className='ps-1 text-secondary'>88</span></Link>
                        <Link to={'/products'}>Rawsilk <span className='ps-1 text-secondary'>54</span></Link>
                        <Link to={'/products'}>Satin <span className='ps-1 text-secondary'>9</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Occasion</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Wedding <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Festive <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Occasional Collection <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Pooja <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Haldi <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Mehendi <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Engagements <span className='ps-1 text-secondary'>12</span></Link>
                        <Link to={'/products'}>Sangeet <span className='ps-1 text-secondary'>88</span></Link>
                        <Link to={'/products'}>Party <span className='ps-1 text-secondary'>54</span></Link>
                        <Link to={'/products'}>Casual <span className='ps-1 text-secondary'>9</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Work</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Embroidery <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>3D flower <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Aari <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>Beads <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Border <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Cut dana <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>cut work <span className='ps-1 text-secondary'>12</span></Link>
                        <Link to={'/products'}>Floral <span className='ps-1 text-secondary'>88</span></Link>
                        <Link to={'/products'}>Handwork <span className='ps-1 text-secondary'>54</span></Link>
                        <Link to={'/products'}>lace <span className='ps-1 text-secondary'>9</span></Link>
                        <Link to={'/products'}>Mirror <span className='ps-1 text-secondary'>60</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>select Size</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Fabric Only <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>M <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>L <span className='ps-1 text-secondary'>74</span></Link>
                        <Link to={'/products'}>XL <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>XXL <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>3XL <span className='ps-1 text-secondary'>76</span></Link>
                        <Link to={'/products'}>Over Sized <span className='ps-1 text-secondary'>12</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>Reviews</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>5 star <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>4 star <span className='ps-1 text-secondary'>13</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>Delivery</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Ready to Ship <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Within 10 days <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Within 15 days <span className='ps-1 text-secondary'>45</span></Link>
                        <Link to={'/products'}>Within 20 days <span className='ps-1 text-secondary'>23</span></Link>
                        <Link to={'/products'}>Within 25 days <span className='ps-1 text-secondary'>10</span></Link>
                        <Link to={'/products'}>Within 30 days <span className='ps-1 text-secondary'>4</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>Store</Accordion.Header>
                      <Accordion.Body>
                        <Link to={'/products'}>Mumbai <span className='ps-1 text-secondary'>126</span></Link>
                        <Link to={'/products'}>Delhi <span className='ps-1 text-secondary'>13</span></Link>
                        <Link to={'/products'}>Bengaluru <span className='ps-1 text-secondary'>23</span></Link>
                        <Link to={'/products'}>Surat <span className='ps-1 text-secondary'>10</span></Link>
                        <Link to={'/products'}>Ahmedabad <span className='ps-1 text-secondary'>4</span></Link>
                        <Link to={'/products'}>Hyderabad <span className='ps-1 text-secondary'>2</span></Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* Filter List Over */}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            {/* OffCanvas Content Over */}
            {/* OffCanvas Content Start */}
            <Offcanvas show={newShow} onHide={newHandleClose} placement={'end'}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Sort By</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className='ff-lexend'>
                  <select name="" id="" className='fs-14 sortList'>
                    <option value="">Trending</option>
                    <option value="">Best Sellers</option>
                    <option value="">New</option>
                    <option value="">Price: High to Low</option>
                    <option value="">Price: High to Low</option>
                    <option value="">Biggest Saving</option>
                  </select>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            {/* OffCanvas Content Over */}

            <div className='d-none d-lg-grid p-0 ff-lexend'>
              <h5 className='text-uppercase  ff-roboto'>Filters</h5>
              {/* Filter List Start */}
              <Accordion defaultActiveKey="1" alwaysOpen className='customAccordian'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Genders</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Female <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Male <span className='ps-1 text-secondary'>13</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>₹0 - ₹8,300 <span className='ps-1 text-secondary'>49</span></Link>
                    <Link to={'/products'}>₹8,300 - ₹16,600 <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>₹16,600 - ₹24,900 <span className='ps-1 text-secondary'>4</span></Link>
                    <div className='d-flex priceFilter align-items-center w-100'>
                      <span>₹</span>
                      <input type="number" placeholder='From' className='p-2' />
                      <span>-</span>
                      <input type="number" placeholder='To' className='p-2' />
                    </div>
                    <Link to={'/products'} className='applyBtn fs-16'>Apply</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Product Category</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Suits <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Saree <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Lehenga <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Gown <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Kuti <span className='ps-1 text-secondary'>85</span></Link>
                    <Link to={'/products'}>Mens <span className='ps-1 text-secondary'>76</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Sub Categories</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Anarkali Suits <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Crop Top Pants <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Kurta Set With Dupattas <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Palazzo Suits <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Sharara Suits <span className='ps-1 text-secondary'>85</span></Link>
                    <Link to={'/products'}>Bandhani Sareee <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Printed Sareee <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Embroidered Sareee <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Banarasi Sareee <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Men Kurta Set <span className='ps-1 text-secondary'>76</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Color</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Black <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Blue <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Pink <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Maroon <span className='ps-1 text-secondary'>45</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Fabric</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Banarasi silk <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Chiffon <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Cotton <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Cotton silk <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Crepe <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Linen <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Net <span className='ps-1 text-secondary'>12</span></Link>
                    <Link to={'/products'}>organza <span className='ps-1 text-secondary'>88</span></Link>
                    <Link to={'/products'}>Rawsilk <span className='ps-1 text-secondary'>54</span></Link>
                    <Link to={'/products'}>Satin <span className='ps-1 text-secondary'>9</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Occasion</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Wedding <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Festive <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Occasional Collection <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Pooja <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Haldi <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Mehendi <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Engagements <span className='ps-1 text-secondary'>12</span></Link>
                    <Link to={'/products'}>Sangeet <span className='ps-1 text-secondary'>88</span></Link>
                    <Link to={'/products'}>Party <span className='ps-1 text-secondary'>54</span></Link>
                    <Link to={'/products'}>Casual <span className='ps-1 text-secondary'>9</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Work</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Embroidery <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>3D flower <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Aari <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>Beads <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Border <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Cut dana <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>cut work <span className='ps-1 text-secondary'>12</span></Link>
                    <Link to={'/products'}>Floral <span className='ps-1 text-secondary'>88</span></Link>
                    <Link to={'/products'}>Handwork <span className='ps-1 text-secondary'>54</span></Link>
                    <Link to={'/products'}>lace <span className='ps-1 text-secondary'>9</span></Link>
                    <Link to={'/products'}>Mirror <span className='ps-1 text-secondary'>60</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>select Size</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Fabric Only <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>M <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>L <span className='ps-1 text-secondary'>74</span></Link>
                    <Link to={'/products'}>XL <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>XXL <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>3XL <span className='ps-1 text-secondary'>76</span></Link>
                    <Link to={'/products'}>Over Sized <span className='ps-1 text-secondary'>12</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Reviews</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>5 star <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>4 star <span className='ps-1 text-secondary'>13</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>Delivery</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Ready to Ship <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Within 10 days <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Within 15 days <span className='ps-1 text-secondary'>45</span></Link>
                    <Link to={'/products'}>Within 20 days <span className='ps-1 text-secondary'>23</span></Link>
                    <Link to={'/products'}>Within 25 days <span className='ps-1 text-secondary'>10</span></Link>
                    <Link to={'/products'}>Within 30 days <span className='ps-1 text-secondary'>4</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>Store</Accordion.Header>
                  <Accordion.Body>
                    <Link to={'/products'}>Mumbai <span className='ps-1 text-secondary'>126</span></Link>
                    <Link to={'/products'}>Delhi <span className='ps-1 text-secondary'>13</span></Link>
                    <Link to={'/products'}>Bengaluru <span className='ps-1 text-secondary'>23</span></Link>
                    <Link to={'/products'}>Surat <span className='ps-1 text-secondary'>10</span></Link>
                    <Link to={'/products'}>Ahmedabad <span className='ps-1 text-secondary'>4</span></Link>
                    <Link to={'/products'}>Hyderabad <span className='ps-1 text-secondary'>2</span></Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* Filter List Over */}

              <Link to='/products' className='w-100'>
                <img src={require('../assets2/Img/videoShopping-banner-tower-25-09-23.jpg')} className='w-100' alt="" />
              </Link>
              <div className='py-2 d-grid justify-content-center text-center iconList'>
                <FaTruckFast />
                <span className='text-secondary fs-12'>Enjoy Free Shipping</span>
                <Link to='/products' className='fs-14 text-uppercase'>Know More</Link>
              </div>
              <div className='pt-3 d-grid justify-content-center text-center iconList'>
                <GiReturnArrow />
                <span className='text-secondary fs-12'>48 Hours Of Easy Returns</span>
                <Link to='/products' className='fs-14 text-uppercase'>Know More</Link>
              </div>
            </div>
          </Col>
          <Col className='col-12 col-lg-10 ff-roboto'>
            <div className='d-flex justify-content-between'>
              <h4 className='text-capitalize'>Best Sellers in India <span className='ps-1 fs-14 text-secondary'>12 items</span></h4>
              <div className='d-none d-lg-block ff-lexend'>
                <span className='fs-14 pe-1'>Sort By</span>
                <select name="" id="" className='fs-14 sortList'>
                  <option value="">Trending</option>
                  <option value="">Best Sellers</option>
                  <option value="">New</option>
                  <option value="">Price: High to Low</option>
                  <option value="">Price: High to Low</option>
                  <option value="">Biggest Saving</option>
                </select>
              </div>
            </div>
            <Row className='py-1 py-lg-2 ff-lexend gy-4'>
              {
                productsImg.map((item, index) => {
                  return (
                    <Col key={index} className='col-6 col-md-4 col-xl-3'>
                      <div>
                        <Link to='/productdetails' className='productImage d-flex'>
                          <img src={item.thubImg} className='thumbImg' alt="" />
                          <img src={item.hoverImg} className='hoverImg' alt="" />
                          <div className='py-1 text-uppercase'>Shop Now</div>
                          <span className='stretched-link'><i className="bi bi-heart"></i></span>
                          <section className='px-1 px-md-2  py-1 text-capitalize'>online exclusive</section>
                        </Link>
                        <div className='productContent d-grid'>
                          <Link to='/productdetails' className='mt-1 mt-sm-2 mb-1'>{item.name}</Link>
                          <section className='fs-16'><span className='fs-14 text-secondary pe-1'>MRP</span>₹{item.price}</section>
                          <section className='d-flex justify-content-start pt-2'>
                            {
                              item.ready &&
                              <div className='readyToShip text-capitalize px-1'><i className="fs-10 bi bi-lightning-fill"></i>Ready to ship</div>
                            }
                            {
                              item.best &&
                              <div className='bestSeller text-capitalize px-1'>BestSeller</div>
                            }
                          </section>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default ProductListing;
