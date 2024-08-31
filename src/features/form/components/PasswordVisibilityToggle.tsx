import { useState } from "react";
import { PasswordVisibilityToggleProps } from "../types";

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({
    name,
    type,
}) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handlePasswordVisibility = () => {
        if (type !== "password") return;

        const passwordInput = document.getElementById(name);

        passwordInput?.setAttribute(
            "type",
            passwordInput?.getAttribute("type") === "password"
                ? "text"
                : "password"
        );

        setPasswordVisibility(!passwordVisibility);
    };

    return (
        <span
            id="passwordVisibility"
            onClick={() => handlePasswordVisibility()}
            className={`absolute inset-y-0 right-4 pl-3 flex items-center select-none cursor-pointer material-icons ${
                passwordVisibility ? "text-primary" : "text-gray-500"
            }`}
        >
            {passwordVisibility ? "visibility" : "visibility_off"}
        </span>
    );
};

export default PasswordVisibilityToggle;
