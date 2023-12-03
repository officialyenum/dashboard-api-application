/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KEInvoiceDtoIn } from "../models/KEInvoiceDtoIn";
import type { MRAInvoiceDtoIn } from "../models/MRAInvoiceDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class InvoiceService {
  /**
   * @returns string Success
   * @throws ApiError
   */
  public static getMuApiInvoice(): CancelablePromise<Array<string>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/mu/api/Invoice",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postMuApiInvoice({
    requestBody,
  }: {
    requestBody?: MRAInvoiceDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/mu/api/Invoice",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getMuApiInvoice1({
    invoiceIdentifier,
    originalFormat,
  }: {
    invoiceIdentifier: number;
    originalFormat?: boolean;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/mu/api/Invoice/{invoiceIdentifier}",
      path: {
        invoiceIdentifier: invoiceIdentifier,
      },
      query: {
        originalFormat: originalFormat,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static putMuApiInvoice({
    id,
    requestBody,
  }: {
    id: number;
    requestBody?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/mu/api/Invoice/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static deleteMuApiInvoice({
    id,
  }: {
    id: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/mu/api/Invoice/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postKeApiInvoice({
    requestBody,
  }: {
    requestBody?: KEInvoiceDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/ke/api/Invoice",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getKeApiInvoice({
    pageIndex,
    lastId,
  }: {
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/ke/api/Invoice",
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
    });
  }
}
