/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InvoiceDateQueryDtoIn } from "../models/InvoiceDateQueryDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TransactionService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiTransaction({
    invoiceid,
  }: {
    invoiceid: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Transaction/{invoiceid}",
      path: {
        invoiceid: invoiceid,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiTransactionDaterange({
    pageIndex,
    lastId,
    requestBody,
  }: {
    pageIndex?: number;
    lastId?: number;
    requestBody?: InvoiceDateQueryDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Transaction/daterange",
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiTransaction1({
    companyid,
    pageIndex,
    lastId,
  }: {
    companyid: number;
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Transaction/{companyid}",
      path: {
        companyid: companyid,
      },
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiTransaction2({
    pageIndex,
    lastId,
  }: {
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Transaction",
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
    });
  }
}
