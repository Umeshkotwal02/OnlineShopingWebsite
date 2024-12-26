import React from 'react';
import "../../styles/Menu.css";
import { Container } from 'react-bootstrap';



const menuData = [
  {
    title: "SALE",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "NEW ARRIVAL",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "Half Saree",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "FASHION SAREE",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "Lehenga Choli",
    subcategories: [
      { title: "Wedding Lehenga", link: "#" },
      { title: "Bridal Lehenga", link: "#" },
      { title: "Designer Lehenga", link: "#" },
      { title: "Contemporary Lehenga", link: "#" },
      { title: "Haldi Lehenga", link: "#" },
      { title: "See All", link: "#" },
    ],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/75026.jpeg",
  },
  {
    title: "GOWN",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "Wedding",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "Celebrity Outfits",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "OCCASIONS",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4903.jpeg",
  },
  {
    title: "Engagement",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
  {
    title: "Reception",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  }, {
    title: "Others",
    subcategories: [],
    imageUrl: "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
  },
];


const Menu = () => {
  return (
    <Container className=" px-3">
      <div className="menu-container">
        {menuData.map((menu, index) => (
          <div className="menu-item" key={index}>
            <button className="menu-button text-capital">{menu.title}</button>
            {menu.subcategories.length > 0 && (
              <div className="submenu">
                <div className="submenu-content">
                  <div className="submenu-grid">
                    {menu.subcategories.map((subcategory, subIndex) => (
                      <div className="submenu-category" key={subIndex}>
                        <h4>Style</h4>
                        <ul>
                          <li>
                            <a href={subcategory.link}>{subcategory.title}</a>
                          </li>
                        </ul>
                      </div>
                    ))}
                    <div className="menu-image">
                      <img src={menu.imageUrl} alt={menu.title} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Menu;


/* General Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.menu-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.menu-item {
  position: relative;
  margin: 0 10px;
}

.menu-button {
  background-color: transparent;
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  padding: 10px 15px;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  text-transform: capitalize !important;
  white-space: nowrap;
}

.menu-button:hover {
  background-color: rgb(0, 0, 0);
  color: #ffffff;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.menu-item:hover .submenu {
  opacity: 1;
  visibility: visible;
}

.submenu-content {
  background-color: white;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
}

.submenu-grid {
  display: flex;
  justify-content: space-between;
}

.submenu-category {
  padding: 0 10px;
}

.submenu-category h4 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.submenu-category ul {
  list-style: none;
  padding: 0;
}

.submenu-category ul li {
  margin-bottom: 8px;
}

.submenu-category ul li a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}

.submenu-category ul li a:hover {
  color: #E9B159;
}

.menu-image {
  max-width: 100%;
  height: auto;
}

.menu-image img {
  width: 100%;
  object-fit: cover;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .submenu-content {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
}

@media (max-width: 768px) {
  .submenu-content {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
