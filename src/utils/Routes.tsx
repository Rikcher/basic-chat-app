import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import SplineSceneBackgroundLayout from "../features/spline-scene-background/layouts/SplineSceneBackgroundLayout";
import RequireAuth from "../features/authentication/components/RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RequireAuth>
                <Home />
            </RequireAuth>
        ),
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
