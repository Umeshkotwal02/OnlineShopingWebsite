import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import HomePage from "../pages/HomePage";
import MyOrderPage from "../pages/OrderPages/MyOrderPage";
import OrderDetails from "../pages/OrderPages/OrderDetails";
import ProductDetails from "../pages/ProductDetails";
import ProductPage from "../pages/ProductPage";
import WishlistPage from "../pages/WishlistPage";

const authProtectedRoutes = [
];

const publicRoutes = [
    { path: '/home', component: HomePage },
    // { path: "/products/:category", component: ProductPage },
    // { path: "/products/details/:productId", component: ProductDetails },
    { path: "/products-page", component: ProductPage },
    { path: "/products/details", component: ProductDetails },
    { path: "/my-order", component: MyOrderPage },
    { path: "/wishlist", component: WishlistPage },
    { path: "/checkout-page", component: CheckOutPage },
    { path: "/my-order/order-details", component: OrderDetails },
];

export { authProtectedRoutes, publicRoutes };