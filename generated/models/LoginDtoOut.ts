/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticateResponseDtoOut } from "./AuthenticateResponseDtoOut";

export type LoginDtoOut = {
  require2FA?: boolean;
  userId?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  setupStatus?: string | null;
  tokenSet?: AuthenticateResponseDtoOut;
};
