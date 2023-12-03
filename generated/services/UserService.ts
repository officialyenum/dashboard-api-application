/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDtoIn } from "../models/LoginDtoIn";
import type { LoginDtoOutSuccessResponseDtoOut } from "../models/LoginDtoOutSuccessResponseDtoOut";
import type { RegisterDtoIn } from "../models/RegisterDtoIn";
import type { StringSuccessResponseDtoOut } from "../models/StringSuccessResponseDtoOut";
import type { SuccessResponseDtoOut_1 } from "../models/SuccessResponseDtoOut_1";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserService {
  /**
   * @returns LoginDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static postApiUserLogin({
    requestBody,
  }: {
    requestBody?: LoginDtoIn;
  }): CancelablePromise<LoginDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/User/login",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
      },
    });
  }

  /**
   * @returns StringSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static getApiUserLogout({
    refreshToken,
  }: {
    refreshToken?: string;
  }): CancelablePromise<StringSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/User/logout",
      query: {
        refreshToken: refreshToken,
      },
      errors: {
        422: `Client Error`,
      },
    });
  }

  /**
   * @returns SuccessResponseDtoOut_1 Success
   * @throws ApiError
   */
  public static postApiUserRegister({
    requestBody,
  }: {
    requestBody?: RegisterDtoIn;
  }): CancelablePromise<SuccessResponseDtoOut_1> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/User/register",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        422: `Client Error`,
      },
    });
  }
}
