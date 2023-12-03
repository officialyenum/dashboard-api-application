/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ZMFiscalDetailsDtoOutSuccessResponseDtoOut } from "../models/ZMFiscalDetailsDtoOutSuccessResponseDtoOut";
import type { ZMInvoiceDtoIn } from "../models/ZMInvoiceDtoIn";
import type { ZMInvoiceDtoInInvoiceRetrieveDtoOutSuccessResponseDtoOut } from "../models/ZMInvoiceDtoInInvoiceRetrieveDtoOutSuccessResponseDtoOut";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ZambiaService {
  /**
   * Post Invoice for Fiscalization
   * Use this endpoint to post a sales invoice for fiscalization.
   * @returns ZMFiscalDetailsDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static postSalesInvoice({
    requestBody,
  }: {
    requestBody?: ZMInvoiceDtoIn;
  }): CancelablePromise<ZMFiscalDetailsDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/zm/api/Invoice",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        402: `Client Error`,
        404: `Not Found`,
        422: `Client Error`,
      },
    });
  }

  /**
   * Get a Previously Fiscalized Invoice
   * Use this endpoint to retrieve a previously fiscalized invoice. You can request the invoice in its original format submitted for fiscalization or in the transformed format.
   * @returns ZMInvoiceDtoInInvoiceRetrieveDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static getInvoice({
    invoiceNumber,
  }: {
    /**
     * Invoice Number
     */
    invoiceNumber: string;
  }): CancelablePromise<ZMInvoiceDtoInInvoiceRetrieveDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/zm/api/Invoice/{invoiceNumber}",
      path: {
        invoiceNumber: invoiceNumber,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}
