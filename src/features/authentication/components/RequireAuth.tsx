import { Navigate } from "react-router-dom";
import useUser from "../store";

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useUser().user;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default RequireAuth;
