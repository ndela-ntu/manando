/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateInvoice = /* GraphQL */ `subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onCreateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInvoiceSubscriptionVariables,
  APITypes.OnCreateInvoiceSubscription
>;
export const onUpdateInvoice = /* GraphQL */ `subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onUpdateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInvoiceSubscriptionVariables,
  APITypes.OnUpdateInvoiceSubscription
>;
export const onDeleteInvoice = /* GraphQL */ `subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onDeleteInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInvoiceSubscriptionVariables,
  APITypes.OnDeleteInvoiceSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
