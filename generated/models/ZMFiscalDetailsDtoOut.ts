/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ZMTaxItemDtoOut } from "./ZMTaxItemDtoOut";

export type ZMFiscalDetailsDtoOut = {
  SdcId?: string | null;
  readonly vsdcdate?: string | null;
  internalData?: string | null;
  signature?: string | null;
  receiptTotalCounter?: number | null;
  normalReceiptTypeCounter?: number | null;
  taxItems?: Array<ZMTaxItemDtoOut> | null;
};
