/** @format */

export default function formatNumber(num: number): string {
  return String(num).padStart(3, "0");
}
