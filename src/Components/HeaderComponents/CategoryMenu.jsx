  import React from 'react';
  import "../../styles/Menu.css";
  import { Col, Container, Row } from 'react-bootstrap';

  const menuData = [
    { id: 1, title: "SALE", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 2, title: "NEW ARRIVAL", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 3, title: "Half Saree", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 4, title: "FASHION SAREE", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    {
      id: 5,
      title: "Lehenga Choli",
      subcategories: [
        { id: 51, title: "Wedding Lehenga", link: "#" },
        { id: 52, title: "Bridal Lehenga", link: "#" },
        { id: 53, title: "Designer Lehenga", link: "#" },
        { id: 54, title: "Contemporary Lehenga", link: "#" },
        { id: 55, title: "Haldi Lehenga", link: "#" },
        { id: 56, title: "See All", link: "#" },
      ],
      imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/75026.jpeg"
    },
    { id: 6, title: "GOWN", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 7, title: "Wedding", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 8, title: "Celebrity Outfits", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 9, title: "OCCASIONS", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4903.jpeg" },
    { id: 10, title: "Engagement", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 11, title: "Reception", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
    { id: 12, title: "OTHERS", subcategories: [], imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg" },
  ];


  const CategoryMenu = () => {
    return (
      <Container fluid className="d-none d-lg-block">
        <Row className="">
          {menuData.map((menu) => (
            <Col key={menu.id} className="">
              <div className="menu-item">
                <button className="menu-button text-uppercase">{menu.title}</button>
                {menu.subcategories.length > 0 && (
                  <div className="submenu">
                    <div className="submenu-content">
                      <div className="submenu-grid">
                        {menu.subcategories.map((subcategory) => (
                          <div className="submenu-category" key={subcategory.id}>
                            <h4>Style</h4>
                            <ul>
                              <li>
                                <a href={subcategory.link}>{subcategory.title}</a>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="menu-image">
                        <img src={menu.imageUrl} alt={menu.title} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  export default CategoryMenu;
