import HomePage from "../pages/HomePage";
import MyOrderPage from "../pages/MyOrderPage";
import ProductDetails from "../pages/ProductDetails";
import ProductListing from "../pages/ProductListing";
import ProductPage from "../pages/ProductPage";
import WishlistPage from "../pages/WishlistPage";

const authProtectedRoutes = [
];

const publicRoutes = [
    { path: '/home', component: HomePage },
    // { path: "/products/:category", component: ProductPage },
    // { path: "/products/details/:productId", component: ProductDetails },
    { path: "/products-page", component: ProductPage },
    { path: "/products-page-demo", component: ProductListing },
    { path: "/products/details", component: ProductDetails },
    { path: "/my-order", component: MyOrderPage },
    { path: "/wishlist", component: WishlistPage },
];

export { authProtectedRoutes, publicRoutes };