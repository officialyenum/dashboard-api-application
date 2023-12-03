import axios from "axios";
import { logoutUser, store, updateAppUser } from "../store";

const APP_URLS = {
  production: {
    REACT_APP_API_URL: "https://vsdc.azurewebsites.net",
  },
  development: {
    REACT_APP_API_URL: "https://vsdc.azurewebsites.net",
  },
  test: {
    REACT_APP_API_URL: "https://vsdc.azurewebsites.net",
  },
};

export const REACT_APP_API_URL =
  APP_URLS[process.env.NODE_ENV].REACT_APP_API_URL;

export const httpClient = axios.create({
  baseURL: REACT_APP_API_URL,
});

let isRefreshingToken = false;

const refreshExpiredToken = async (refreshToken: string) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL}/user/refresh-token`,
      { refreshToken }
    );
    return data;
  } catch (error) {
    store?.dispatch(logoutUser());
    return undefined;
  }
};

export async function httpRequest<T>(request: () => Promise<T>): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request();
      resolve(response);
    } catch (error) {
      if (
        (error?.response?.status === 401 || error?.status === 401) &&
        error?.response?.data?.message?.includes("expired")
      ) {
        const originalRequest = error?.response?.config || error?.body?.config;

        if (!isRefreshingToken) {
          isRefreshingToken = true;
          const refreshToken = localStorage.getItem("refreshToken");

          delete httpClient.defaults.headers.common.Authorization;

          try {
            const res = await refreshExpiredToken(refreshToken);
            if (res) {
              const { accessToken, refreshToken } = res;

              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              localStorage.setItem("isRefreshingToken", "false");
              isRefreshingToken = false;
              httpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

              store?.dispatch(updateAppUser({ accessToken }));

              originalRequest.headers.Authorization = `Bearer ${accessToken}`;

              const response = await axios(originalRequest);
              resolve(response?.data || response);
            } else {
              isRefreshingToken = false;
            }
          } catch (error2) {
            isRefreshingToken = false;
            localStorage.setItem("isRefreshingToken", "false");
            reject(error);
          }
        } else {
          setTimeout(async () => {
            const new_token = localStorage.getItem("accessToken");
            originalRequest.headers.Authorization = `Bearer ${new_token}`;

            const response: any = await axios(originalRequest);
            resolve(response?.data || response);
          }, 2000);
        }
      } else {
        reject(error);
      }
    }
  });
}

function timeoutPromise<T>(ms: number, promise: Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const error: any = new Error(
        "We experienced a timeout, Please try again."
      );

      error.name = "TimeoutError";
      error.response = {
        data: {
          message: "We experienced a timeout, Please try again.",
        },
        status: 409,
      };
      reject(error);
    }, ms);

    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
}

export async function apiWrapper<T>(request: () => Promise<T>) {
  const response = await timeoutPromise(60000, httpRequest(request));
  return response;
}

export const handleAccessToken = async () => {
  const token = localStorage.getItem("accessToken");
  httpClient.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : null;
};
