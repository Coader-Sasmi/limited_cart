/* eslint-disable @typescript-eslint/no-unused-expressions */

"use client";

import useSWR, { SWRConfiguration } from "swr";
import { getFromLocalStorage } from "../utils";

type responseType = {
  haveNextPage?: boolean;
  pageNo?: number;
  perPage?: number;
  totalCount?: number;
};

const serverUrl = process.env.NEXT_PUBLIC_API_URL;

const useSwr = <T>(url: string | null, options?: SWRConfiguration) => {
  const accessToken = getFromLocalStorage("ACCESS_TOKEN");
  const fetcher = async (url: string) => {
    const headers: {
      Authorization?: string;
      "Content-Type"?: string;
    } = {};
    accessToken && (headers["Authorization"] = `Bearer ${accessToken}`);
    headers["Content-Type"] = "application/json";
    const res = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await res.json();

    return data as T & responseType;
  };

  const { data, error, mutate, isValidating } = useSWR<T & responseType>(
    url ? [`${serverUrl}/${url}`] : null,
    fetcher,
    {
      ...options,
      revalidateOnFocus: false,
    }
  );
  // console.log(data);
  return {
    data,
    error,
    isValidating,
    mutate,
  };
};
export default useSwr;
