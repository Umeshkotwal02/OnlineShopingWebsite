import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/ProductDetails";
import ProductPage from "../pages/ProductPage";

const authProtectedRoutes = [
];

const publicRoutes = [
    { path: '/home', component: HomePage },
    { path: "/products/:category", component: ProductPage },
    { path: "/products/details/:productId", component: ProductDetails },
];

export { authProtectedRoutes, publicRoutes };