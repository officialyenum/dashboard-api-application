/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiStatsHistoryDtoOut } from "./ApiStatsHistoryDtoOut";

export type ApiStatDtoOut = {
  id?: number;
  companyId?: number | null;
  invoiceCount?: number | null;
  apiCallCount?: number | null;
  readonly apiStatsHistories?: Array<ApiStatsHistoryDtoOut> | null;
};
