/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ZMInvoiceItemsDtoIn = {
  /**
   * Represents the sequence number assigned to items in the invoice. Must a positive integer preferably starting from 1, and no number should appear twice.
   */
  ItemSequenceNumber: number;
  ItemDesc: string;
  itemClsCd: string;
  PackagingUnitCode: string;
  Package: number;
  QuantityUnitCode: string;
  readonly supplyAmount?: number | null;
  readonly discountRate?: number;
  DiscountAmount: number;
  readonly taxableAmount?: number | null;
  Barcode?: string | null;
  Quantity: number;
  UnitPrice: number;
  TotalAmount: number;
  readonly taxLabel?: string | null;
  TaxCodes: Array<string>;
  /**
   * Indicates whether the unit price includes tax (true) or not (false).
   */
  isTaxInclusive: boolean;
  /**
   * Recommended Retail Price (RRP) should be provided when the tax code is 'B'.
   */
  rrp?: number;
};
