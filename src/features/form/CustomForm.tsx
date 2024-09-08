import { CustomFormProps } from "./types";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import LogInWithGoogleButton from "./components/LogInWithGoogleButton";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useFirebaseAuth } from "../authentication/hooks/useFirebaseAuth";

const CustomForm: React.FC<CustomFormProps> = ({
    inputFields,
    submitButtonLabel,
    formType,
}) => {
    const methods = useForm();
    const { error, registerNewUser, loginExistingUser } = useFirebaseAuth();

    const onSubmit = async (data: FieldValues) => {
        switch (formType) {
            case "login":
                await loginExistingUser(data);
                break;
            case "registration":
                await registerNewUser(data);
                break;
        }
    };

    return (
        <FormProvider {...methods}>
            {error && <p className="mb-3 text-red-600">{error}</p>}
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {inputFields.map((inputField, index) => (
                    <InputField key={index} {...inputField} />
                ))}
                <SubmitButton label={submitButtonLabel} />
            </form>
            <LogInWithGoogleButton />
        </FormProvider>
    );
};

export default CustomForm;
