/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type KEInvoiceItemModel = {
  itemSequenceNumber: number;
  itemCode?: string | null;
  itemClassificationCode?: string | null;
  itemName: string;
  barcode?: string | null;
  packagingUnitCode?: string | null;
  package?: number | null;
  quantityUnitCode?: string | null;
  quantity: number;
  unitPrice?: number | null;
  supplyAmount?: number | null;
  discountRate?: number | null;
  discountAmount?: number | null;
  taxLabel: string;
  taxableAmount: number;
  taxAmount: number;
  totalAmount: number;
  isTaxInclusive?: boolean | null;
};
