/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SignatureService {
  /**
   * @returns string Success
   * @throws ApiError
   */
  public static getMuApiSignature(): CancelablePromise<Array<string>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/mu/api/Signature",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postMuApiSignature({
    requestBody,
  }: {
    requestBody?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/mu/api/Signature",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getMuApiSignature1({
    invoiceIdentifier,
  }: {
    invoiceIdentifier: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/mu/api/Signature/{invoiceIdentifier}",
      path: {
        invoiceIdentifier: invoiceIdentifier,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static putMuApiSignature({
    id,
    requestBody,
  }: {
    id: number;
    requestBody?: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/mu/api/Signature/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static deleteMuApiSignature({
    id,
  }: {
    id: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/mu/api/Signature/{id}",
      path: {
        id: id,
      },
    });
  }
}
