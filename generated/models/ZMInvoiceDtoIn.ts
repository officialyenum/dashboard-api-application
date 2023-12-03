/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReceiptTypeCode } from "./ReceiptTypeCode";
import type { ZMInvoiceItemsDtoIn } from "./ZMInvoiceItemsDtoIn";

export type ZMInvoiceDtoIn = {
  /**
   * This represents an internal invoice number and must be unique for every invoice
   */
  InvoiceNumber: string;
  /**
   * The invoice number of the target invoice to be credited or debited.
   */
  OriginalInvoiceNumber?: string | null;
  RegistrantName: string;
  RegistrantId: string;
  IssuerName?: string | null;
  IssuerId?: string | null;
  CustomerMobileNumber?: string | null;
  ReportNumber?: string | null;
  readonly receivedItem?: string | null;
  readonly salesTypeCode?: string | null;
  ReceiptTypeCode: ReceiptTypeCode;
  PaymentTypeCode: string;
  readonly invoiceStatusCode?: string | null;
  currencyType: string;
  conversionRate?: number;
  /**
   * Represents the selling date. The expected format is yyyyMMddHHmmss.
   */
  SaleDate: string;
  CustomerName?: string | null;
  CustomerTpin?: string | null;
  readonly taxRateA?: number | null;
  readonly taxRateB?: number | null;
  readonly taxRateC?: number | null;
  readonly taxRateD?: number | null;
  readonly taxAmtC?: number | null;
  readonly taxAmtD?: number | null;
  readonly totalTaxableAmount?: number | null;
  readonly totalTaxAmount?: number;
  readonly totalItemCount?: number;
  readonly validatedDate?: string | null;
  refundedReasonCode?: string | null;
  sdcId: string;
  readonly purchaseAccept?: string | null;
  invoiceItems: Array<ZMInvoiceItemsDtoIn>;
};
