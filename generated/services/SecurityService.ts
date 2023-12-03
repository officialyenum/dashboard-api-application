/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeEmailDtoIn } from "../models/ChangeEmailDtoIn";
import type { ChangePasswordDtoIn } from "../models/ChangePasswordDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SecurityService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiSecurityChangepassword({
    requestBody,
  }: {
    requestBody?: ChangePasswordDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Security/changepassword",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiSecurityChangeemail({
    requestBody,
  }: {
    requestBody?: ChangeEmailDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Security/changeemail",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiSecurityForgotpassword({
    email,
  }: {
    email?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Security/forgotpassword",
      query: {
        email: email,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiSecurityEnabletfa({
    email,
  }: {
    email?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Security/enabletfa",
      query: {
        email: email,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiSecurityDisabletfa({
    email,
  }: {
    email?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Security/disabletfa",
      query: {
        email: email,
      },
    });
  }
}
