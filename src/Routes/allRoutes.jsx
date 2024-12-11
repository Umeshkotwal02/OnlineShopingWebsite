import HomePage from "../pages/HomePage";

const authProtectedRoutes = [
];


const publicRoutes = [
    { path: '/home', component: HomePage },
];

export { authProtectedRoutes, publicRoutes };