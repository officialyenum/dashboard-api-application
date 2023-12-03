/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientUserDtoIn } from "../models/ClientUserDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserRolesService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postApiUserRoles({
    requestBody,
  }: {
    requestBody?: ClientUserDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/UserRoles",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiUserRoles({
    requestBody,
  }: {
    requestBody?: ClientUserDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/UserRoles",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
