interface AuthTitleProps {
    label: string;
}

const AuthTitle: React.FC<AuthTitleProps> = ({ label }) => {
    return <h1 className="text-3xl font-bold mb-3">{label}</h1>;
};

export default AuthTitle;
