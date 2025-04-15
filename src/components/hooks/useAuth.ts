/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { create } from "zustand";
import { getFromLocalStorage, removeFromLocalStorage } from "../utils";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<any>;
  setUser: (user: Partial<any>) => Promise<void>;
  logout: () => void;
  getUser: () => Promise<any>;
};

const serverUrl = process.env.NEXT_PUBLIC_API_URL;

const useAuth = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {},
  setUser: async (user: Partial<any>) => {
    set({ user: { ...user } });
  },
  logout: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    // console.log(accessToken);
    if (!accessToken) {
      set({ user: {}, isUserLoading: false });
      return;
    }
    try {
      const res = await fetch(`${serverUrl}/auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(res);

      // if (res?.status !== 200) {
      //   window?.localStorage?.removeItem("ACCESS_TOKEN");
      //   set({ user: {}, isUserLoading: false });
      // } else {
      //   const data = await res.json();
      //   const userData = data?.success?.data;
      //   set({ user: { ...userData }, isUserLoading: false });
      // }
    } catch (error) {
      set({ user: {} });
    } finally {
      set({ user: undefined });
      typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
    }
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    // console.log(accessToken, "accessToken");

    if (typeof accessToken !== "string") {
      return set({ user: {}, isUserLoading: false });
    }
    // try {
    //   const res = await fetch(`${serverUrl}/auth/self`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   if (res?.status !== 200) {
    //     window?.localStorage?.removeItem("ACCESS_TOKEN");
    //     set({ user: {}, isUserLoading: false });
    //   } else {
    //     const data = await res.json();
    //     // console.log(data, "response");
    //     const userData = data?.data;
    //     set({ user: { ...userData }, isUserLoading: false });
    //   }
    // } catch (error) {
    //   set({ user: {} });
    // }
  },
}));

export default useAuth;
