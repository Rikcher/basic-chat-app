import UserPicture from "../../../../../components/ui/UserPicture";
import useUser from "../../../../../features/authentication/store";
import Icon from "../../../../../components/ui/Icon";

interface UserBlockProps {
    src: string | null | undefined;
}

const UserBlock: React.FC<UserBlockProps> = ({ src }) => {
    const user = useUser().user;
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-4">
                <UserPicture width={4} src={src} />
                <p className="text-white font-semibold text-2xl">
                    {user?.displayName}
                </p>
            </div>
            <div className="flex gap-2">
                <Icon type="settings_account_box" />
                <Icon type="logout" />
            </div>
        </div>
    );
};

export default UserBlock;
