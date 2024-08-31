import AuthTitle from "../../components/ui/AuthTitle";
import AuthSubtitle from "../../components/ui/AuthSubtitle";
import CustomForm from "../../features/form/CustomForm";

const Login = () => {
    return (
        <div className="absolute bg-background rounded-lg right-[6%] top-1/2 -translate-y-1/2 flex flex-col text-black py-12 px-14 w-[40rem]">
            <AuthTitle label="LogIn" />
            <AuthSubtitle
                label="Don't have and account? "
                path="/registration"
                linkLabel="register"
            />
            <CustomForm
                inputFields={[
                    {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                        dontValidate: true,
                    },
                    {
                        name: "password",
                        label: "Password",
                        type: "password",
                        required: true,
                        dontValidate: true,
                    },
                ]}
                submitButtonLabel="LogIn"
            />
        </div>
    );
};

export default Login;
