export interface InputFieldProps {
    name: string,
    label: string,
    type: "text" | "password" | "email",
    placeholder?: string,
    required?: boolean,
    dontValidate?: boolean,
}

export interface CustomFormProps {
    inputFields: InputFieldProps[];
    submitButtonLabel: string
}

export interface ValidationRule {
    pattern?: {
        value: RegExp;
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    validate?: (value: string) => boolean | string;
    required?: {
        value: boolean;
        message: string;
    };
}

export interface PasswordVisibilityToggleProps {
    name: string,
    type: "text" | "password" | "email",
}

export interface SubmitButtonProps {
    label: string;
}