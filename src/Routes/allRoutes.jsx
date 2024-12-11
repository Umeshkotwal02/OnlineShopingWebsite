import Shopping from "../pages/Shopping";
import Men from "../pages/Carousel";

const authProtectedRoutes = [
//   { path: "/apps-api-key", component: <APIKey /> },
//   { path: "/variant", component: <Variants /> },


//   this route should be at the end of all other routes
//   eslint-disable-next-line react/display-name
//   {
//     path: "/",
//     exact: true,
//     component: <Navigate to="/dashboard" />,
//   },
//   { path: "*", component: <Navigate to="/dashboard" /> },
];


const publicRoutes = [
    // Toast
    // { path: "/toaster", component: <Toast /> },

    // Authentication Page
    // { path: "/logout", component: <Logout /> },
    // { path: "/login", component: <Login /> },
    // { path: "/register", component: <Register /> },
    { path: '/shopping', component: Shopping },
    { path: '/men', component: Men },
];

export { authProtectedRoutes, publicRoutes };