import React, { useState } from "react";

const orderDetails = {
    product_detail: [
        {
            product_id: 1,
            product_images: require("../assets/images/form-checkout/check1.png"),
            product_name: "Pink Ethnic",
            product_description: "Sea Green Georgette Semi-Stitched Lehenga and Unstitched Blouse with...",
            product_sub_total: "₹4,000 (1 item) ",
            stitching_price: 200,
            product_quantity: 1,
            status: "complete",
        },
        {
            product_id: 2,
            product_images: "path/to/image2.jpg",
            product_name: "Product 2",
            product_sub_total: "₹2,000",
            product_mrp: "₹2,500",
            product_discount: 20,
            stitching_price: 0,
            product_quantity: 1,
            status: "pending",
        },
    ],
    order_detail: [
        {
            order_status: "complete",
        },
    ],
};

const getStatusStyle = (status) => {
    if (status === "complete") return "bg-success text-white";
    if (status === "pending") return "bg-warning text-dark";
    return "bg-secondary text-white";
};

const MyComponent = () => {
    const [selectedProductIds, setSelectedProductIds] = useState([]);

    const handleProductSelect = (productId) => {
        setSelectedProductIds((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const handleWriteReviewOpen = (index) => {
        console.log("Open review for product index:", index);
    };

    const handleReturnButtonClick = () => {
        console.log("Return Order");
    };

    const openCancelDialog = () => {
        console.log("Cancel Order");
    };

    return (
        <div className="my-5">
            {orderDetails.product_detail.map((item, index) => {
                const isSelected = selectedProductIds.includes(item.product_id);
                return (
                    <div
                        key={index}
                        className={`border border-secondary mt-4 ${isSelected ? "bg-light" : ""
                            }`}
                    >
                        <div className="d-flex flex-wrap justify-content-between align-items-center p-3 cursor-pointer">
                            <div
                                className="d-flex gap-3 flex-grow-1 w-100"
                                onClick={() => handleProductSelect(item.product_id)}
                            >
                                <div className="flex-shrink-0" style={{ width: "150px" }}>
                                    <img
                                        src={item.product_images}
                                        alt=""
                                        className="w-100 h-100 object-fit-cover"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h3 className="h5 mb-3">{item.product_name}</h3>
                                    <hp className="mb-3">{item.product_description}</hp>
                                    <p className="mb-0">Qty: {item.product_quantity}</p>
                                    <p className="mb-3 font-weight-bold text-dark">
                                        {item.product_sub_total}
                                    </p>
                                    <p
                                        className={`text-center rounded p-2 mt-2 ${getStatusStyle(
                                            item.status
                                        )}`}
                                    >
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                            {item.status === "complete" && (
                                <div className="d-flex flex-column gap-2 mt-3">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleWriteReviewOpen(index)}
                                    >
                                        Write Product Review
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
            <div className="d-flex justify-content-center mt-3 mb-5">
                {orderDetails.order_detail[0].order_status !== "cancel" &&
                    orderDetails.order_detail[0].order_status !== "return" && (
                        <button
                            className="btn btn-warning text-white"
                            onClick={
                                orderDetails.order_detail[0].order_status === "complete"
                                    ? handleReturnButtonClick
                                    : openCancelDialog
                            }
                        >
                            {orderDetails.order_detail[0].order_status === "complete"
                                ? "Return Order"
                                : "Order Cancel"}
                        </button>
                    )}

               
            </div>
        </div>
    );
};

export default MyComponent;
