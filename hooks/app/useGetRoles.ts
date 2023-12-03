import { useGetRequest } from "api/useGetRequest";
import { ClientUserDtoIn, UserRolesService } from "generated";

export const useGetRoles = () => {
  const { isLoading, data } = useGetRequest<undefined, any>({
    service: "/api/UserRoles",
    tag: "UserRolesService",
  });

  return {
    isLoading,
    data,
  };
};
