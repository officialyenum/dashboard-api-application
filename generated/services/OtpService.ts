/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDtoIn } from "../models/EmailDtoIn";
import type { LoginDtoOutSuccessResponseDtoOut } from "../models/LoginDtoOutSuccessResponseDtoOut";
import type { OTPDtoIn } from "../models/OTPDtoIn";
import type { SuccessResponseDtoOut_1 } from "../models/SuccessResponseDtoOut_1";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class OtpService {
  /**
   * @returns LoginDtoOutSuccessResponseDtoOut Success
   * @throws ApiError
   */
  public static postApiOtp({
    requestBody,
  }: {
    requestBody?: OTPDtoIn;
  }): CancelablePromise<LoginDtoOutSuccessResponseDtoOut> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Otp",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        422: `Client Error`,
      },
    });
  }

  /**
   * @returns SuccessResponseDtoOut_1 Success
   * @throws ApiError
   */
  public static getApiOtp({
    requestBody,
  }: {
    requestBody?: EmailDtoIn;
  }): CancelablePromise<SuccessResponseDtoOut_1> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Otp",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
