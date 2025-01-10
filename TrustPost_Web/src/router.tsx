import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/Account/SignIn";
import HomePage2 from "./pages/HomePage2";
import SignUpPage from "./components/Account/SignUp";
import ForgotPassPage from "./components/Account/ForgotPassword";
const router = createBrowserRouter ([
    {
        path: "/signin",
        element: <SignInPage/>
    },
    {
        path: "/",
        element: <HomePage2/>
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    },
    {
        path: "/forgotpass",
        element: <ForgotPassPage/>
    }
]);

export default router;