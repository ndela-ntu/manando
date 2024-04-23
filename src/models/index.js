// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StatusEnum = {
  "PENDING": "PENDING",
  "PAID": "PAID"
};

const { Invoice, Customer, Product } = initSchema(schema);

export {
  Invoice,
  Customer,
  Product,
  StatusEnum
};