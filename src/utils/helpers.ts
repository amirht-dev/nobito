import { twMerge } from "@/lib/tailwind-merge";
import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNameToShort(name: string) {
  return name
    .split(" ")
    .map((phrase) => phrase[0].toUpperCase())
    .join("");
}

export function formatStorybookOptions(options: readonly string[]) {
  return options.map((v) => `"${v}"`).join(" | ");
}
