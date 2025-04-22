/* eslint-disable prefer-const */
"use client";
import { useRouter } from "next/router";
import { JSX, useEffect, useRef } from "react";
import { Loader } from "../core";
import useAuth from "./useAuth";

type PassedComponentProps = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  description?: string;
  ogImage?: string;
};

const withProtectedRoute = (
  PassedComponent: React.ComponentType<PassedComponentProps>
) =>
  function NewComponent(props: PassedComponentProps) {
    const { user, isUserLoading } = useAuth();
    const { push, asPath } = useRouter();
    const urlRole = asPath.split("/")[1];
    let mounted = useRef<boolean>(false);

    useEffect(() => {
      mounted.current = true;
      if (!isUserLoading && !user?.department?.id) push(`/`);
      //   if (!isUserLoading && user?.isBlocked) push(`/`);
      if (!isUserLoading && user?.department?.id) push(`/admin`);
      return () => {
        mounted.current = false;
      };
    }, [isUserLoading, user, push, urlRole, asPath]);

    return (
      <>
        {user?.department?.id && user?.department?.id ? (
          <PassedComponent {...props} />
        ) : (
          <Loader visible={true} />
        )}
      </>
    );
  };

export default withProtectedRoute;
