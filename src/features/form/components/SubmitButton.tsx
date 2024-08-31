import { useFormContext } from "react-hook-form";
import { SubmitButtonProps } from "../types";

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <button
            disabled={isSubmitting}
            type="submit"
            className="text-lg text-white bg-primary-gradient font-semibold flex justify-center py-3 px-8 rounded-lg w-full hover:bg-primary-gradient-dark focus-ring-custom mt-10"
        >
            {label}
        </button>
    );
};

export default SubmitButton;
