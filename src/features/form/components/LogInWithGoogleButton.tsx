import googleIcon from "/src/assets/GoogleIcon.svg";
import { useFirebaseAuth } from "../../authentication/hooks/useFirebaseAuth";

const LogInWithGoogleButton = () => {
    const auth = useFirebaseAuth();
    const handleCLick = () => {
        auth.loginUserWithGoogle();
    };

    return (
        <button
            onClick={handleCLick}
            className="bg-transparent rounded-lg border border-black border-solid flex justify-center items-center w-full py-3 px-4 gap-3 hover:bg-gray-300 outline-primary mt-7"
        >
            <img className="select-none" src={googleIcon} alt="" />
            <p className="text-lg font-semibold">LogIn with Google</p>
        </button>
    );
};

export default LogInWithGoogleButton;
