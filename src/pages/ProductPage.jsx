import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsOption } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";
import XClose from "../assets/SvgIcons"; // Assuming you have an icon for XClose

const ProductPage = () => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [appliedFilterData, setAppliedFilterData] = useState({});
  const [isExpanded, setIsExpanded] = useState([]);
  const [loading, setLoading] = useState(true);

  const breadcrumbArray = [
    <Link to={"/"} className="text-gray-600 text-base hover:underline capitalize" key="1">Home</Link>,
    <p className="text-yellow-600 text-base capitalize" key="2">Product Page</p>,
  ];

  // Static data for the example
  const staticFilterOptions = [
    {
      title: "Price",
      name: "price",
      data: [
        { value: "low", label: "Low to High" },
        { value: "high", label: "High to Low" },
      ],
    },
    {
      title: "Brand",
      name: "brand",
      data: [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "sony", label: "Sony" },
      ],
    },
  ];

  useEffect(() => {
    // Mocked filter options fetching
    setFilterOptions(staticFilterOptions);
    setLoading(false);
  }, []);

  const handleAccordionChange = (id) => {
    setIsExpanded((prev) => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleCheckboxChange = (key, value) => {
    const updatedFilterData = { ...appliedFilterData };
    if (!updatedFilterData[key]) updatedFilterData[key] = [];
    if (updatedFilterData[key].includes(value)) {
      updatedFilterData[key] = updatedFilterData[key].filter(item => item !== value);
    } else {
      updatedFilterData[key].push(value);
    }
    setAppliedFilterData(updatedFilterData);
  };

  const handlePaginationChange = (page) => {
    console.log("Page changed to:", page);
    // Add pagination logic if required
  };

  return (
    <>
      {loading ? (
        <div className="loader-overlay">
          <div className="loader-container">
          </div>
        </div>
      ) : (
        <div>
          <header className="bg-gray-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/product-page" className="hover:underline">Product Page</Link>
                </li>
              </ul>
            </nav>
          </header>

          <div className="container mx-auto p-4">
            <div className="flex justify-between mb-6">
              <div className="text-lg">Product Page</div>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Sidebar Filters */}
              <div className="w-full lg:w-1/4">
                <h3 className="text-xl font-medium mb-4">Filters</h3>

                {filterOptions.map((filter, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className={`cursor-pointer border-b-2 border-gray-300 pb-2 ${isExpanded.includes(filter.title) ? 'text-yellow-600' : 'text-gray-600'}`}
                      onClick={() => handleAccordionChange(filter.title)}
                    >
                      {filter.title}
                    </div>
                    {isExpanded.includes(filter.title) && (
                      <div className="mt-2">
                        {filter.data.map((item, idx) => (
                          <div key={idx} className="flex items-center mb-2">
                            <input
                              type="checkbox"
                              id={item.value}
                              checked={appliedFilterData[filter.name]?.includes(item.value)}
                              onChange={() => handleCheckboxChange(filter.name, item.value)}
                              className="mr-2"
                            />
                            <label htmlFor={item.value}>{item.label}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Product List */}
              <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mock Product Cards */}
                  {[...Array(6).keys()].map((_, idx) => (
                    <div key={idx} className="border p-4 rounded-lg shadow-lg">
                      <div className="text-center mb-4">Product {idx + 1}</div>
                      <div className="text-center text-gray-500">Product description here.</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-center">
                    <nav>
                      <ul className="flex space-x-4">
                        {[...Array(5).keys()].map((_, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handlePaginationChange(idx + 1)}
                              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                            >
                              {idx + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
