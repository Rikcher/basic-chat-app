import { CustomFormProps } from "./types";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import LogInWithGoogleButton from "./components/LogInWithGoogleButton";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const CustomForm: React.FC<CustomFormProps> = ({
    inputFields,
    submitButtonLabel,
}) => {
    const methods = useForm();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {inputFields.map((inputField, index) => (
                    <InputField key={index} {...inputField} />
                ))}
                <SubmitButton label={submitButtonLabel} />
                <LogInWithGoogleButton />
            </form>
        </FormProvider>
    );
};

export default CustomForm;
