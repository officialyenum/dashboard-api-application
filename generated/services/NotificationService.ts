/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class NotificationService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getApiNotification(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Notification",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static putApiNotification({
    id,
  }: {
    id: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/Notification/{id}",
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiNotification({
    id,
  }: {
    id: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/Notification/{id}",
      path: {
        id: id,
      },
    });
  }
}
