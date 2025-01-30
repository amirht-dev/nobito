"use client";

import config from "@/config.json";
import useScreen from "@/hooks/useScreen";
import { useMemo } from "react";
import type { Entries } from "type-fest";
import type {
  Breakpoints,
  ComponentResponsiveProps,
  ResponsiveComponentProp,
  ResponsivePropObject,
  ResponsiveProps,
} from "./index.types";

function isBPLowerThanEqual(targetBPName: Breakpoints, bpName: Breakpoints) {
  if (targetBPName === "DEFAULT" || bpName === "DEFAULT") return true;
  return (
    parseInt(config.screens[targetBPName]) <= parseInt(config.screens[bpName])
  );
}

function sortResponsiveObject<T extends ResponsivePropObject<any>>(
  responsiveObj: T,
) {
  return Object.fromEntries(
    (Object.entries(responsiveObj) as Entries<T>).sort((a, b) => {
      if (a[0] === "DEFAULT") return -1;
      if (b[0] === "DEFAULT") return 1;
      return parseInt(config.screens[a[0]]) < parseInt(config.screens[b[0]])
        ? -1
        : 1;
    }),
  ) as T;
}

function getResponsiveProp<T>(prop: ResponsivePropObject<T>, bp: Breakpoints) {
  return (
    Object.entries(sortResponsiveObject(prop)) as Entries<
      ResponsivePropObject<T>
    >
  ).reduce(
    (accProp, [propBp, propBpValue]) => {
      if (propBp === "DEFAULT" || isBPLowerThanEqual(propBp, bp))
        return propBpValue;
      if (bp === "DEFAULT") return accProp;
    },
    undefined as T | undefined,
  );
}

function useResponsive<P extends object>(props: ComponentResponsiveProps<P>) {
  const [bpName] = useScreen();

  const _props = useMemo(
    () =>
      (
        Object.entries(props) as Entries<
          Record<string, ResponsiveComponentProp<P>>
        >
      ).reduce(
        (accProps, [prop, responsivePropValue]) => {
          let value: unknown = responsivePropValue;

          if (
            responsivePropValue != null &&
            typeof responsivePropValue === "object"
          ) {
            value = getResponsiveProp(responsivePropValue, bpName);
          }

          return { ...accProps, [prop]: value };
        },
        {} as Record<string, unknown>,
      ),
    [bpName],
  );

  return _props;
}

const Responsive = <T extends object>({
  component: Comp,
  ...props
}: ResponsiveProps<T>) => {
  const responsiveProps = useResponsive(props);

  return <Comp {...(responsiveProps as any)} />;
};

export default Responsive;

export function withResponsive<T extends object>(
  component: React.ComponentType<T>,
) {
  return function func(props: Omit<ResponsiveProps<T>, "component">) {
    return <Responsive {...({ component, ...props } as ResponsiveProps<T>)} />;
  };
}
