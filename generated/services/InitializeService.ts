/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ZMInitInfoDtoIn } from "../models/ZMInitInfoDtoIn";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class InitializeService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postZmApiInitialize({
    requestBody,
  }: {
    requestBody?: ZMInitInfoDtoIn;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/zm/api/Initialize",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postMuApiInitialize({
    formData,
  }: {
    formData?: {
      MRAUsername: string;
      MRAPassword: string;
      EbsMraId: Array<string>;
      PubKey: Blob;
      AreaCode: string;
    };
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/mu/api/Initialize",
      formData: formData,
      mediaType: "multipart/form-data",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static putMuApiInitialize({
    id,
    ebsMraId,
  }: {
    id: number;
    ebsMraId?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/mu/api/Initialize/{id}",
      path: {
        id: id,
      },
      query: {
        ebsMraId: ebsMraId,
      },
    });
  }
}
