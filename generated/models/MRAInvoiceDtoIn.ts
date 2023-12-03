/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MRAInvoiceBuyer } from "./MRAInvoiceBuyer";
import type { MRAInvoiceItemDtoIn } from "./MRAInvoiceItemDtoIn";
import type { MRAInvoiceSeller } from "./MRAInvoiceSeller";

export type MRAInvoiceDtoIn = {
  mraEbsId?: string | null;
  personType: string;
  transactionType: string;
  invoiceTypeDesc: string;
  cashierId: string;
  invoiceIdentifier: string;
  invoiceCounter?: string | null;
  invoiceRefIdentifier?: string | null;
  previousNoteHash?: string | null;
  dateTimeInvoiceIssued: string;
  currencyType: string;
  conversionRate: number;
  totalAmtPaid: string;
  reasonStated?: string | null;
  salesTransactions: string;
  seller: MRAInvoiceSeller;
  buyer?: MRAInvoiceBuyer;
  invoiceItems: Array<MRAInvoiceItemDtoIn>;
};
