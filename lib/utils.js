// Format a number as Kenyan Shillings
export function formatPriceKES(amount) {
  if (typeof amount !== "number") return "";
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Safe parse of query params (e.g. table=?)
export function getSafeSearchParam(searchParams, key) {
  try {
    const value = searchParams.get(key);
    if (!value) return null;
    return String(value).slice(0, 32); // basic guard
  } catch {
    return null;
  }
}