import { useFormContext } from "react-hook-form";
import { SubmitButtonProps } from "../types";
import LoadingDisk from "../../../components/ui/LoadingDisk";

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
    const {
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <button
            disabled={isSubmitting}
            type="submit"
            className={`text-lg text-white font-semibold flex justify-center py-3 px-8 rounded-lg w-full outline-primary mt-14 ${
                isSubmitting
                    ? "bg-gray-600"
                    : "bg-primary-gradient hover:bg-primary-gradient-dark"
            }`}
        >
            {isSubmitting ? (
                <LoadingDisk
                    color="#D524BA"
                    backgroundColor="#9ca3af"
                    size={1.8}
                />
            ) : (
                label
            )}
        </button>
    );
};

export default SubmitButton;
