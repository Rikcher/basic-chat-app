import { useState } from "react";

interface IconProps {
    type: string;
    size?: number;
    color?: string;
    hoverColor?: string;
}

const Icon: React.FC<IconProps> = ({
    type,
    size = 2,
    color = "white",
    hoverColor = "#D524BA",
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    return (
        <button>
            <span
                className="material-symbols-outlined"
                style={{
                    fontSize: `${size}rem`,
                    color: isHovered ? hoverColor : color,
                    transition: "color 0.2s ease",
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {type}
            </span>
        </button>
    );
};

export default Icon;
