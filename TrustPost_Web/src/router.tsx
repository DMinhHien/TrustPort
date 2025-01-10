import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/Account/SignIn";
import HomePage from "./pages/HomePage";
import SignUpPage from "./components/Account/SignUp";
import ForgotPassPage from "./components/Account/ForgotPassword";
import Example from "./components/Example/example";
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
    }
]);

export default router;