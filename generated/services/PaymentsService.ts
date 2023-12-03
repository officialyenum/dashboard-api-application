/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PaymentsService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiPayments({
    pageIndex,
    lastId,
  }: {
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Payments",
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
  public static getApiPayments1({
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
      url: "/api/Payments/{companyid}",
      path: {
        companyid: companyid,
      },
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
    });
  }
}
