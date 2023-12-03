/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyDtoIn } from "../models/CompanyDtoIn";
import type { CompanyDtoOutSuccessResponseDtoOut } from "../models/CompanyDtoOutSuccessResponseDtoOut";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CompanyService {
  /**
   * @returns CompanyDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static getApiCompany({
    id,
  }: {
    id: number;
  }): CancelablePromise<CompanyDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Company/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiCompany1(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Company",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiCompany({
    requestBody,
  }: {
    requestBody?: CompanyDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Company",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
