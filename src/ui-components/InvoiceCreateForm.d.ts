/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InvoiceCreateFormInputValues = {
    amount?: number;
    date?: string;
    status?: string;
};
export declare type InvoiceCreateFormValidationValues = {
    amount?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InvoiceCreateFormOverridesProps = {
    InvoiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InvoiceCreateFormProps = React.PropsWithChildren<{
    overrides?: InvoiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InvoiceCreateFormInputValues) => InvoiceCreateFormInputValues;
    onSuccess?: (fields: InvoiceCreateFormInputValues) => void;
    onError?: (fields: InvoiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InvoiceCreateFormInputValues) => InvoiceCreateFormInputValues;
    onValidate?: InvoiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function InvoiceCreateForm(props: InvoiceCreateFormProps): React.ReactElement;
