import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handleError } from "../utils/errorHandler";
import { apiWrapper, httpClient } from ".";

type ServiceFunction<A, B> = (payload?: A) => Promise<B>;

interface UseGetRequestOptions<A, B> {
  service: string;
  method: "post" | "put" | "patch" | "delete";
  payload?: A;
  onSuccess?: (val: any, vars?: A) => void;
  onError?: (val: any) => void;
  tag: string;
  invalidate?: boolean;
}

interface UseGetRequestResult<A, B> {
  isLoading: boolean;
  data?: B;
  error?: any;
  trigger: (payload: A) => void;
}

export function useMutationRequest<A, B>({
  service,
  payload,
  method,
  onSuccess,
  onError,
  tag,
  invalidate,
}: UseGetRequestOptions<A, B>): UseGetRequestResult<A, B> {
  const queryClient = useQueryClient();

  const info = useMutation({
    mutationKey: [tag],
    mutationFn: (payload: A) =>
      apiWrapper(() => httpClient[method]<A, B>(service, payload)),
    onSuccess: (data, vars) => {
      onSuccess?.(data, vars);
      if (invalidate) {
        queryClient.invalidateQueries({ queryKey: [tag] });
      }
    },
    onError: (error) => {
      handleError(error);
      onError?.(error);
    },
  });

  return {
    data: info.data,
    isLoading: info.isLoading,
    error: info.error,
    trigger: info.mutate,
  };
}
