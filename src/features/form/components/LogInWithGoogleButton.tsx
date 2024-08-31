import googleIcon from "/src/assets/GoogleIcon.svg";

const LogInWithGoogleButton = () => {
    return (
        <button className="bg-transparent rounded-lg border border-black border-solid flex justify-center items-center w-full py-3 px-4 gap-3 hover:bg-gray-300 focus-ring-custom mt-4">
            <img className="select-none" src={googleIcon} alt="" />
            <p className="text-lg font-semibold">LogIn with Google</p>
        </button>
    );
};

export default LogInWithGoogleButton;
