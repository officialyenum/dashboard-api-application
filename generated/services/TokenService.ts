/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TokenService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiToken({
    refreshToken,
  }: {
    refreshToken?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Token",
      query: {
        refreshToken: refreshToken,
      },
    });
  }
}
