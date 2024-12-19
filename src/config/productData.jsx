const productData = [
    {
        id: 1,
        product_name: "Stylish Denim Jacket",
        product_images: [
            require("../assets/images/New-Arrive/img1.png"),
            require("../assets/images/New-Arrive/img2.png")
        ],
        product_mrp: 1200, product_price: 999,
        product_discount: 20,
        is_wishlist: false,
        currency: "₹"
    },
    {
        id: 2,
        product_name: "Casual T-shirt",
        product_images: [require("../assets/images/New-Arrive/img2.png")],
        product_mrp: 800,
        product_price: 599,
        product_discount: 25,
        is_wishlist: false,
        currency: "₹"

    },
    {
        id: 3,
        product_name: "Trendy Hoodie",
        product_images: [require("../assets/images/New-Arrive/img3.png"),],
        product_mrp: 1500,
        product_price: 1200,
        product_discount: 15,
        is_wishlist: false, currency: "₹"
    },
    {
        id: 4,
        product_name: "Chic Skirt", 
        product_images: [require("../assets/images/New-Arrive/img4.png"),],

        product_mrp: 1000,
        product_price: 750,
        product_discount: 10,
        is_wishlist: false, currency: "₹"
    },
    {
        id: 5,
        product_name: "Classic Jeans",
        product_images: [require("../assets/images/New-Arrive/img5.png"),],
        product_mrp: 1300,
        product_price: 999,
        product_discount: 20,
        is_wishlist: false, currency: "₹"
    },
    {
        id: 6,
        product_name: "Summer Dress",
        product_images: [require("../assets/images/New-Arrive/img6.png"),],
        product_mrp: 1400,
        product_price: 1100,
        product_discount: 18,
        is_wishlist: false, currency: "₹"
    },
    {
        id: 7,
        product_name: "Leather Jacket",
        product_images: [require("../assets/images/New-Arrive/img7.png"),],
        product_mrp: 2000,
        product_price: 1600,
        product_discount: 20, is_wishlist: false, currency: "₹"
    },
    {
        id: 8,
        product_name: "Cotton Shirt",
        product_images: [require("../assets/images/New-Arrive/img8.png"),],
        product_mrp: 900,
        product_price: 700,
        product_discount: 22, is_wishlist: false, currency: "₹"
    },
    {
        id: 9,
        product_name: "Winter Coat",
        product_images: [require("../assets/images/New-Arrive/img9.png"),],
        product_mrp: 2500,
        product_price: 2000,
        product_discount: 15, is_wishlist: false, currency: "₹"
    },
    {
        id: 10,
        product_name: "Sweatpants",
        product_images: [require("../assets/images/New-Arrive/img10.png"),],
        product_mrp: 1000,
        product_price: 850,
        product_discount: 10, is_wishlist: false, currency: "₹"
    },
    // {
    //     id: 11,
    //     product_name: "Flip Flops",
    //     product_images: ["https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
    //         "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"],
    //     product_mrp: 500,
    //     product_price: 399,
    //     product_discount: 5, is_wishlist: false, currency: "₹"
    // },
    // {
    //     id: 12,
    //     product_name: "Sunglasses",
    //     product_images: ["https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg",
    //         "https://kapoorlehengasaree.com/admin/public/category1/4231.jpeg"],
    //     product_mrp: 1500,
    //     product_price: 1200, product_discount: 10, is_wishlist: false, currency: "₹"
    // },
];

export { productData };