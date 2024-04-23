/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInvoiceInput = {
  id?: string | null,
  amount?: number | null,
  date?: string | null,
  status?: StatusEnum | null,
  invoiceCustomerId?: string | null,
};

export enum StatusEnum {
  PENDING = "PENDING",
  PAID = "PAID",
}


export type ModelInvoiceConditionInput = {
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  and?: Array< ModelInvoiceConditionInput | null > | null,
  or?: Array< ModelInvoiceConditionInput | null > | null,
  not?: ModelInvoiceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  invoiceCustomerId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusEnumInput = {
  eq?: StatusEnum | null,
  ne?: StatusEnum | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Invoice = {
  __typename: "Invoice",
  id: string,
  amount?: number | null,
  date?: string | null,
  status?: StatusEnum | null,
  Customer?: Customer | null,
  createdAt: string,
  updatedAt: string,
  invoiceCustomerId?: string | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name?: string | null,
  email?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInvoiceInput = {
  id: string,
  amount?: number | null,
  date?: string | null,
  status?: StatusEnum | null,
  invoiceCustomerId?: string | null,
};

export type DeleteInvoiceInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  quantity: number,
  image: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  image: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  quantity?: number | null,
  image?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInvoiceFilterInput | null > | null,
  or?: Array< ModelInvoiceFilterInput | null > | null,
  not?: ModelInvoiceFilterInput | null,
  invoiceCustomerId?: ModelIDInput | null,
};

export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection",
  items:  Array<Invoice | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  image?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInvoiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  date?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  invoiceCustomerId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  image?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInvoiceQueryVariables = {
  id: string,
};

export type GetInvoiceQuery = {
  getInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type ListInvoicesQueryVariables = {
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInvoicesQuery = {
  listInvoices?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      amount?: number | null,
      date?: string | null,
      status?: StatusEnum | null,
      createdAt: string,
      updatedAt: string,
      invoiceCustomerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      quantity: number,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type OnUpdateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type OnDeleteInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    amount?: number | null,
    date?: string | null,
    status?: StatusEnum | null,
    Customer?:  {
      __typename: "Customer",
      id: string,
      name?: string | null,
      email?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    invoiceCustomerId?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
