/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInvoice = /* GraphQL */ `query GetInvoice($id: ID!) {
  getInvoice(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInvoiceQueryVariables,
  APITypes.GetInvoiceQuery
>;
export const listInvoices = /* GraphQL */ `query ListInvoices(
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      date
      status
      createdAt
      updatedAt
      invoiceCustomerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvoicesQueryVariables,
  APITypes.ListInvoicesQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    name
    email
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
