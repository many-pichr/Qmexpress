import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfiles.jsx";
import TableList from "views/TableList/TableList.jsx";
import ShipmentList from "views/Shipment/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Logins from "layouts/Login/index.jsx";
import {
  Dashboard,
  Person,
  Add,
  Input,
  ContentPaste,
  LibraryBooks,
  People,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboarder",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/add-shipment",
    sidebarName: "Add Shipment",
    navbarName: "Add Shipment",
    icon: Add,
    component: UserProfile
  },
  {
    path: "/shipment",
    sidebarName: "Shipment",
    navbarName: "Profile",
    icon: Input,
    component: ShipmentList
  },
  {
    path: "/users",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/users",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Users",
    navbarName: "Users",
    icon: People,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  
 { redirect: true, path: "/", to: "/login", navbarName: "Redirect" },
  { redirect: true, path: "/login", to: "/login", navbarName: "Redirect" }
];

export default dashboardRoutes;
