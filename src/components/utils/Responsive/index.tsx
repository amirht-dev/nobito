"use client";

import useScreen from "@/hooks/useScreen";
import React from "react";
import type { ResponsiveProps } from "./index.types";

const Responsive = <T extends React.ComponentType>({
  component: Comp,
  ...props
}: ResponsiveProps<T>) => {
  const [bpName] = useScreen();

  const responsiveProps =
    bpName === "DEFAULT" ? props : { ...props, ...props[bpName] };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Comp {...(responsiveProps as any)} />;
};

export default Responsive;
