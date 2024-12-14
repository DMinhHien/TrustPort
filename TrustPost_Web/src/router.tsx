import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2"
const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/homepage2",
        element: <HomePage2/>
    }
]);

export default router;