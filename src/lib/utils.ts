import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Price helpers for COP-like strings such as "$16.000"
export function parsePrice(display?: string): number {
  if (!display) return 0;
  const digits = (display.match(/\d+/g) || []).join("");
  if (!digits) return 0;
  return parseInt(digits, 10);
}

export function formatPrice(value: number): string {
  if (!value || isNaN(value)) return '$0';
  const str = Math.round(value).toString();
  const withDots = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$${withDots}`;
}
