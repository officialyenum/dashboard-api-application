import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils/errorHandler";
import { apiWrapper, httpClient } from ".";

type ServiceFunction<A, B> = (payload?: A) => Promise<B>;

interface UseGetRequestOptions<A, B> {
  service: string;
  payload?: A;
  page?: number;
  size?: number;
  searchText?: string;
  enabled?: boolean;
  onSuccess?: (val: any) => void;
  onError?: (val: any) => void;
  tag: string;
}

interface UseGetRequestResult<B> {
  isLoading: boolean;
  data?: B;
  error?: any;
  refetch?: () => void;
  isRefetching: boolean;
}

interface Response<A> {
  data?: A;
}

export function useGetRequest<A, B>({
  service,
  payload,
  page,
  size,
  onSuccess,
  onError,
  tag,
  enabled = true,
}: UseGetRequestOptions<A, B>): UseGetRequestResult<B> {
  const methodName = service;
  const queryKey = [
    tag,
    page && size ? { methodName, page, size } : { methodName },
  ];

  const info = useQuery({
    queryKey,
    queryFn: () =>
      apiWrapper(() => httpClient["get"]<A, Response<B>>(service, payload)),
    enabled,
    onSuccess: (data) => onSuccess?.(data),
    onError: (error) => {
      handleError(error);
      onError?.(error);
    },
  });

  return {
    data: info?.data?.data,
    isLoading: info.isLoading,
    refetch: info.refetch,
    isRefetching: info.isRefetching,
  };
}
