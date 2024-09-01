import { useFirebaseAuth } from "../features/authentication/hooks/useFirebaseAuth";
import useUser from "../features/authentication/store";

const Home = () => {
    const { logOut } = useFirebaseAuth();
    const user = useUser().user;

    const handleClick = () => {
        logOut();
    };

    return (
        <div>
            {user?.displayName}
            <h1 className="text-black text-3xl font-bold">HOME</h1>
            <button onClick={handleClick}>CLICK HERE TO LOG OUT</button>
        </div>
    );
};

export default Home;
