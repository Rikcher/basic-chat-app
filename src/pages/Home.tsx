import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/registration">REgister</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
