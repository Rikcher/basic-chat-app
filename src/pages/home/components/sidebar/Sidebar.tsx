import { useFirebaseAuth } from "../../../../features/authentication/hooks/useFirebaseAuth";
import Logo from "../../../../components/ui/Logo";
import UserBlock from "./components/UserBlock";
import useGetCurrentUserPfp from "../../../../hooks/useGetCurrentUserPfp";

const Sidebar = () => {
    const { logOut } = useFirebaseAuth();
    const currentUserPfp = useGetCurrentUserPfp();

    const handleClick = () => {
        logOut();
    };

    return (
        <section className="h-full w-1/5 bg-background-light py-6 px-4">
            <header className="flex gap-5 mb-8 items-center border-b border-solid border-gray-600 pb-5">
                <Logo width={2} />
                <h1 className="text-lg font-bold text-white">Basic chat app</h1>
            </header>
            <div className="mb-5">
                <UserBlock src={currentUserPfp} />
            </div>
            <button onClick={handleClick}>CLICK HERE TO LOG OUT</button>
        </section>
    );
};

export default Sidebar;
