// useInputValidation.ts

import { ValidationRule } from "../types";
import { REGEXES } from "../constants";
import { useFormContext } from "react-hook-form";

export const useInputValidation = (name: string, required?: boolean): ValidationRule => {
    const validationRule: ValidationRule = {};
    const {
        watch
    } = useFormContext();

    switch (name) {
        case "email":
        validationRule.pattern = {
            value: REGEXES.EMAIL,
            message: "Please enter correct email address",
        };
        break;
        case "password":
        validationRule.pattern = {
            value: REGEXES.PASSWORD,
            message: "Your password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (!@#$%&), and be between 8 to 24 characters long.",
        };
        break;
        case "matchPassword":
        validationRule.validate = (value) => {
            const passwordValue = watch("password");
            return passwordValue === value || "Passwords must match";
        };
        break;
        default:
        validationRule.maxLength = {
            value: 30,
            message: "Please keep this value under 30 characters",
        };
    }

    if (required) {
        validationRule.required = {
        value: true,
        message: "Please fill in this field",
        };
    }

    return validationRule;
};
