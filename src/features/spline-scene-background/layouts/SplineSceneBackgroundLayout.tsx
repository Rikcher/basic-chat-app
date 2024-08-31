import SplineScene from "../components/SplineScene";
import { Outlet } from "react-router-dom";

const SplineSceneBackgroundLayout = () => {
    return (
        <>
            <SplineScene />
            <Outlet />
        </>
    );
};

export default SplineSceneBackgroundLayout;
