/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientUserDtoIn } from "../models/ClientUserDtoIn";
import type { CompanyUsersDtoIn } from "../models/CompanyUsersDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserManagementService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiUserManagement({
    requestBody,
  }: {
    requestBody?: ClientUserDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/UserManagement",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiUserManagement({
    requestBody,
  }: {
    requestBody?: CompanyUsersDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/UserManagement",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiUserManagement({
    requestBody,
  }: {
    requestBody?: ClientUserDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/UserManagement",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
