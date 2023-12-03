/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MRAInvoiceItemDtoIn = {
  itemNo: number;
  taxCodes: Array<string>;
  nature: string;
  productCodeMRA?: string | null;
  productCodeOwn?: string | null;
  itemDesc: string;
  quantity: number;
  unitPrice: number;
  discount?: number;
  totalPrice: number;
  isTaxInclusive: boolean;
};
