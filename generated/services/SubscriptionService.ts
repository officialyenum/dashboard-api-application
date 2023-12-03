/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionDtoIn } from "../models/SubscriptionDtoIn";
import type { SubscriptionDtoOutListSuccessResponseDtoOut } from "../models/SubscriptionDtoOutListSuccessResponseDtoOut";
import type { SubscriptionDtoOutSuccessResponseDtoOut } from "../models/SubscriptionDtoOutSuccessResponseDtoOut";
import type { SuccessResponseDtoOut_1 } from "../models/SuccessResponseDtoOut_1";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SubscriptionService {
  /**
   * @returns SubscriptionDtoOutListSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static getApiSubscription({
    pageIndex,
    lastId,
  }: {
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<SubscriptionDtoOutListSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Subscription",
      query: {
        PageIndex: pageIndex,
        LastId: lastId,
      },
    });
  }

  /**
   * @returns SubscriptionDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static postApiSubscription({
    requestBody,
  }: {
    requestBody?: SubscriptionDtoIn;
  }): CancelablePromise<SubscriptionDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Subscription",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * @returns SubscriptionDtoOutListSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static getApiSubscription1({
    companyid,
    pageIndex,
    lastId,
  }: {
    companyid: number;
    pageIndex?: number;
    lastId?: number;
  }): CancelablePromise<SubscriptionDtoOutListSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Subscription/{companyid}",
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
   * @returns SubscriptionDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static putApiSubscription({
    id,
  }: {
    id: number;
  }): CancelablePromise<SubscriptionDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/Subscription/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns SuccessResponseDtoOut_1 Success
   * @throws ApiError
   */
  public static deleteApiSubscription({
    id,
  }: {
    id: number;
  }): CancelablePromise<SuccessResponseDtoOut_1> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/Subscription/{id}",
      path: {
        id: id,
      },
      errors: {
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}
