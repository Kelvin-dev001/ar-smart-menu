import { formatPriceKES } from "./utils";

/**
 * Build a WhatsApp deep link for the cart.
 * @param {Object} params
 * @param {Array} params.items - cart items [{ name, price, quantity, options }]
 * @param {string} params.orderType - "Dine-in" | "Takeaway"
 * @param {string} params.note - optional note from the user
 * @param {string} params.restaurantName - e.g., "We-AR-Menu Demo"
 * @param {string} params.phoneNumber - E.164 format, e.g., "+254759293030"
 */
export function buildWhatsAppLink({
  items = [],
  orderType = "Dine-in",
  note = "",
  restaurantName = "We-AR-Menu Demo",
  phoneNumber = "",
}) {
  const subtotal = items.reduce(
    (sum, it) => sum + (it.price || 0) * (it.quantity || 0),
    0
  );

  const lines = [];
  lines.push(`Hello, I'd like to place an order from ${restaurantName}:`);
  lines.push("");
  items.forEach((it, idx) => {
    const optionsText = Object.keys(it.options || {})
      .map((k) => `${k}: ${it.options[k]}`)
      .join(", ");
    const optPart = optionsText ? ` (${optionsText})` : "";
    lines.push(
      `${idx + 1}x ${it.name}${optPart} – ${formatPriceKES(it.price)}`
    );
  });

  lines.push("");
  lines.push(`Subtotal: ${formatPriceKES(subtotal)}`);
  lines.push(`Order type: ${orderType}`);
  if (note?.trim()) {
    lines.push(`Notes: ${note.trim()}`);
  }
  lines.push("");
  lines.push("Sent from We-AR-Menu.");

  const message = encodeURIComponent(lines.join("\n"));
  const phone = phoneNumber.replace(/[^+\d]/g, "");
  return `https://wa.me/${phone}?text=${message}`;
}