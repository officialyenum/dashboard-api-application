/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ApiKeyService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiApiKey({
    companyid,
  }: {
    companyid: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/ApiKey/{companyid}",
      path: {
        companyid: companyid,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static putApiApiKey({
    apiKeyid,
  }: {
    apiKeyid: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/ApiKey/{apiKeyid}",
      path: {
        apiKeyid: apiKeyid,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiApiKey(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/ApiKey",
    });
  }
}
