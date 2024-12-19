import React from "react";
import { Breadcrumbs } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
const Breadcrumb = ({ list }) => {
  return (
    <div className="bg-white px-lg-4 px-xl-4 px-xxl-4">
      <div className="py-2 w-100 px-3 mx-auto " style={{ maxWidth: "1804px" }}>
        <Breadcrumbs
          separator={<FaChevronRight className="text-sm" />}
          aria-label="breadcrumb"
        >
          {list}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
