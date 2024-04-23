/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createInvoice = /* GraphQL */ `mutation CreateInvoice(
  $input: CreateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  createInvoice(input: $input, condition: $condition) {
    id
    amount
    date
    status
    Customer {
      id
      name
      email
      image
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    invoiceCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInvoiceMutationVariables,
  APITypes.CreateInvoiceMutation
>;
export const updateInvoice = /* GraphQL */ `mutation UpdateInvoice(
  $input: UpdateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  updateInvoice(input: $input, condition: $condition) {
    id
    amount
    date
    status
    Customer {
      id
      name
      email
      image
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    invoiceCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInvoiceMutationVariables,
  APITypes.UpdateInvoiceMutation
>;
export const deleteInvoice = /* GraphQL */ `mutation DeleteInvoice(
  $input: DeleteInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  deleteInvoice(input: $input, condition: $condition) {
    id
    amount
    date
    status
    Customer {
      id
      name
      email
      image
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    invoiceCustomerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInvoiceMutationVariables,
  APITypes.DeleteInvoiceMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    quantity
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    quantity
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    quantity
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
