import React, { useState } from "react";
import { Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import PropTypes from "prop-types";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FilterSelect = () => {
  const options = [
    { value: 10, label: "Sort by Latest" },
    { value: 20, label: "Sort By Low To High Price" },
    { value: 30, label: "Sort By High To Low Price" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <Dropdown>
      <DropdownButton
        variant="outline-secondary"
        title={
          <>
            {options.find((option) => option.value === selectedValue).label}
            {selectedValue ? <FaAngleUp /> : <FaAngleDown />}
          </>
        }
        onSelect={(value) => handleSelect(value)}
      >
        {options.map((option) => (
          <DropdownItem key={option.value} eventKey={option.value}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

FilterSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilterSelect;
