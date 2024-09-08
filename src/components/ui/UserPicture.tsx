import NoProfilePicture from "/src/assets/NoProfilePicture.svg";

interface UserPictureProps {
    width: number;
    src: string | null | undefined;
}

const UserPicture: React.FC<UserPictureProps> = ({ width, src }) => {
    return (
        <img
            className="rounded-full aspect-square object-cover bg-white"
            src={src ?? NoProfilePicture}
            alt="User Picture"
            style={{ width: `${width}rem` }}
        />
    );
};

export default UserPicture;
