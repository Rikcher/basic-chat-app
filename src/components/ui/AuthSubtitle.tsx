import { Link } from "react-router-dom";

interface AuthSubtitleProps {
    label: string;
    path: string;
    linkLabel: string;
}

const AuthSubtitle: React.FC<AuthSubtitleProps> = ({
    label,
    path,
    linkLabel,
}) => {
    return (
        <p className="text-xl font-medium mb-10">
            {label}
            <Link
                to={path}
                className="text-primary hover:underline outline-primary"
            >
                {linkLabel}
            </Link>
        </p>
    );
};

export default AuthSubtitle;
