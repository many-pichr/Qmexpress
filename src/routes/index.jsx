import RootLayout from "layouts/RootLayout/index.jsx";
import Login from "Authentication/App";

const indexRoutes = [{ path: "/login", component: Login },{ path: "/", component: RootLayout }];

export default indexRoutes;
