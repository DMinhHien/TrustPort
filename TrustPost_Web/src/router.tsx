import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/Account/SignIn";
import HomePage from "./pages/HomePage";
import SignUpPage from "./components/Account/SignUp";
import ForgotPassPage from "./components/Account/ForgotPassword";
import Example from "./components/Example/example";
import OrderList from "./components/Order/OrderList";
import OrderDetailPage from "./components/Order/OrderDetailPage";
import NotificationPage from "./components/Notification/NotificationPage";
import ProfilePage from "./pages/ProfilePage";
import ChangeAddressReceipt from "./components/Profile/ChangeAddressReceipt";
const router = createBrowserRouter ([
    {
        path: "/signin",
        element: <SignInPage/>
    },
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    },
    {
        path: "/forgotpass",
        element: <ForgotPassPage/>
    },
    {
        path: "/example",
        element: <Example/>
    },
    {
        path: "/order",
        element: <OrderList/>
    },
    {
        path: "/orderdetail",
        element: <OrderDetailPage/>
    },
    {
        path: "/notification",
        element: <NotificationPage/>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
    {
        path: "/changeaddress",
        element: <ChangeAddressReceipt/>
    }
]);

export default router;