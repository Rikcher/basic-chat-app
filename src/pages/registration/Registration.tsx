import AuthTitle from "../../components/ui/AuthTitle";
import AuthSubtitle from "../../components/ui/AuthSubtitle";
import CustomForm from "../../features/form/CustomForm";
import useUser from "../../features/authentication/store";

const Registration = () => {
    console.log(useUser().user);

    return (
        <div className="absolute bg-background rounded-2xl right-[6%] top-1/2 -translate-y-1/2 flex flex-col text-black py-12 px-14 w-[40rem]">
            <AuthTitle label="Registration" />
            <AuthSubtitle
                label="Already have and account? "
                path="/login"
                linkLabel="login"
            />
            <CustomForm
                inputFields={[
                    {
                        name: "name",
                        label: "Name",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                    },
                    {
                        name: "password",
                        label: "Password",
                        type: "password",
                        required: true,
                    },
                    {
                        name: "matchPassword",
                        label: "Confirm password",
                        type: "password",
                        required: true,
                    },
                ]}
                submitButtonLabel="Register"
                formType="registration"
            />
        </div>
    );
};

export default Registration;
