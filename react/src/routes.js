
import Dashboard from "views/Dashboard/Dashboard.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import Homepage from "views/Pages/index"

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import UploadPage from "views/Pages/Upload";

var dashRoutes = [
  {
    path: "/home-page",
    name: "Homepage",
    component: Homepage,
    mini: "H",
    rtlMini: "هعذا",
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Features",
    rtlName: "صفحات",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/upload-page",
        name: "Upload",
        rtlName: "صفحة الخطأ",
        mini: "U",
        rtlMini: "البريد",
        component: UploadPage,
        layout: "/admin"
      },
      {
        path: "/login-page",
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        component: UserProfile,
        layout: "/admin"
      }
    ]
  }
];
export default dashRoutes;
