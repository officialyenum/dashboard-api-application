/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiStatDtoOut } from "./ApiStatDtoOut";
import type { SubscriptionDtoOut } from "./SubscriptionDtoOut";
import type { VSDCUser } from "./VSDCUser";

export type CompanyDtoOut = {
  id?: number;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  country?: string | null;
  status?: string | null;
  created?: string | null;
  readonly subscriptions?: Array<SubscriptionDtoOut> | null;
  readonly users?: Array<VSDCUser> | null;
  readonly apiStats?: Array<ApiStatDtoOut> | null;
};
