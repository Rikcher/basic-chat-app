import logo from "/src/assets/brand/logo.svg";

interface LogoProps {
    width: number;
}

const Logo: React.FC<LogoProps> = ({ width }) => {
    return <img style={{ width: `${width}rem` }} src={logo} alt="" />;
};

export default Logo;
