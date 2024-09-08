import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/chat";

const Home = () => {
    return (
        <main className="flex w-screen h-screen">
            <Sidebar />
            <Chat />
        </main>
    );
};

export default Home;
