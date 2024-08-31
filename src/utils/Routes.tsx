import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import SplineSceneBackgroundLayout from "../features/spline-scene-background/layouts/SplineSceneBackgroundLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "",
        element: <SplineSceneBackgroundLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
        ],
    },
]);

export default router;
