import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const QuantityCounter = ({ onChange, quantity }) => {
  const [countValue, setCountValue] = useState(quantity || 1);

  const handleIncrement = () => {
    setCountValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCountValue((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    if (onChange) onChange(countValue);
  }, [countValue, onChange]);

  return (
    <InputGroup className="d-flex align-items-center border rounded">
      <Button
        variant="outline-secondary"
        onClick={handleDecrement}
        className="px-3"
      >
        -
      </Button>
      <FormControl
        className="text-center"
        value={countValue}
        readOnly
        style={{
          width: "50px",
          borderLeft: "1px solid #ccc",
          borderRight: "1px solid #ccc",
        }}
      />
      <Button
        variant="outline-secondary"
        onClick={handleIncrement}
        className="px-3"
      >
        +
      </Button>
    </InputGroup>
  );
};

export default QuantityCounter;
