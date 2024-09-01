import React from "react";
import { InputFieldProps } from "../types";
import { useFormContext } from "react-hook-form";
import { useInputValidation } from "../hooks/useInputValidation";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    type,
    placeholder,
    required,
    dontValidate,
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const validationRule = useInputValidation(name, required);

    return (
        <div className="flex flex-col gap-2 mb-7">
            <label className="font-medium" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <input
                    id={name}
                    className={`rounded-md border border-solid ${
                        errors[name] ? "border-rose-600" : "border-black"
                    } bg-transparent pl-4 pr-14 py-3 outline-primary w-full`}
                    {...(dontValidate
                        ? register(name)
                        : register(name, validationRule))}
                    type={type}
                    placeholder={placeholder}
                />
                {type === "password" && (
                    <PasswordVisibilityToggle name={name} type={type} />
                )}
            </div>
            {errors[name] && (
                <p className="text-rose-600 mt-1">{`${errors[name].message}`}</p>
            )}
        </div>
    );
};

export default InputField;
