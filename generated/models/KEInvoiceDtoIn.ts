/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KEInvoiceItemModel } from "./KEInvoiceItemModel";

export type KEInvoiceDtoIn = {
  tpin: string;
  deviceId: string;
  invoiceNumber: string;
  issuerId: string;
  originalInvoiceNumber?: string | null;
  customerName?: string | null;
  customerTpin?: string | null;
  customerMobileNumber?: string | null;
  reportNumber?: string | null;
  transactionType: string;
  receiptTypeCode: string;
  currencyType: string;
  conversionRate: number;
  saleDate: string;
  itemDetails?: Array<KEInvoiceItemModel> | null;
};
