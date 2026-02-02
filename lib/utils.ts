import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type StringOrNumber = string | number | undefined | null;

const toStringSafe = (value: StringOrNumber): string => {
  return value === null ? "" : String(value);
};

const toNumberSafe = (value: StringOrNumber): number => {
  if (value == null) return 0;
  if (typeof value === "number") return value;

  const parsed = Number(value);
  return isNaN(parsed) ? 0 : parsed;
};

export { cn, toNumberSafe, toStringSafe };
