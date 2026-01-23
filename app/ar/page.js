"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/data/menu";
import { formatPriceKES } from "@/lib/utils";
import ItemModal from "@/components/ItemModal";
import FloatingButton from "@/components/FloatingButton";
import { CartProvider, useCart } from "@/lib/cart-context";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_NUMBER = "+254759293030";
const RESTAURANT_NAME = "We-AR-Menu Demo";

function ARScene() {
  const [selectedId, setSelectedId] = useState(MENU_ITEMS[0]?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderType, setOrderType] = useState("Dine-in"); // "Dine-in" | "Takeaway"
  const [note, setNote] = useState("");

  const { items, addItem, removeItem, clear } = useCart();

  const selectedItem = useMemo(
    () => MENU_ITEMS.find((m) => m.id === selectedId),
    [selectedId]
  );

  const categoryItems = useMemo(() => {
    const map = {};
    MENU_CATEGORIES.forEach((cat) => {
      map[cat] = MENU_ITEMS.filter((i) => i.category === cat);
    });
    return map;
  }, []);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, it) => sum + (it.price || 0) * (it.quantity || 0),
        0
      ),
    [items]
  );

  const handleCheckout = () => {
    if (!items.length) return;
    const link = buildWhatsAppLink({
      items,
      orderType,
      note,
      restaurantName: RESTAURANT_NAME,
      phoneNumber: WHATSAPP_NUMBER,
    });
    window.location.href = link;
  };

  return (
    <div className="mx-auto min-h-screen max-w-xl px-4 py-5 space-y-5">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
            We-AR-Menu Demo
          </p>
          <h1 className="text-2xl font-semibold text-white">
            View dishes in AR
          </h1>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-gray-200">
          WhatsApp orders
        </span>
      </header>

      {/* Selected Item + AR Viewer */}
      <section className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">{selectedItem?.category}</p>
            <h2 className="text-lg font-semibold text-white">
              {selectedItem?.name}
            </h2>
            <p className="text-xs text-gray-300 line-clamp-2">
              {selectedItem?.description}
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-gold">
              {formatPriceKES(selectedItem?.price || 0)}
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-200 hover:border-white/20"
          >
            Details
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          {selectedItem?.modelUrl ? (
            <model-viewer
              src={selectedItem.modelUrl}
              alt={selectedItem.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="fixed"
              placement="floor"
              camera-controls
              touch-action="pan-y"
              autoplay
              exposure="1"
              shadow-intensity="0.9"
              style={{ width: "100%", height: "320px", background: "#0F172A" }}
            ></model-viewer>
          ) : (
            <div className="flex h-[320px] items-center justify-center text-sm text-gray-400">
              No 3D model URL provided.
            </div>
          )}
        </div>

        <p className="mt-1 text-[11px] text-gray-400">
          Tap the AR icon, move your phone to scan your table, then tap to place
          the dish on the surface.
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => addItem(selectedItem, 1, {})}
            className="rounded-full bg-gradient-to-r from-brand-accent to-brand-gold px-4 py-2 text-sm font-semibold text-black shadow-soft hover:brightness-110"
          >
            Add to cart
          </button>
        </div>
      </section>

      {/* Menu Lists by Category */}
      <section className="space-y-4">
        {MENU_CATEGORIES.map((cat) => (
          <div key={cat} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{cat}</p>
              <span className="text-[11px] text-gray-400">
                {categoryItems[cat]?.length || 0} items
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {categoryItems[cat]?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                    item.id === selectedId
                      ? "border-brand-gold bg-brand-gold/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.12em] text-gray-400">
                    {item.category}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-brand-gold">
                    {formatPriceKES(item.price)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Item Modal */}
      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addItem}
      />

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-t-2xl bg-brand-dark p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Cart</p>
              <button
                onClick={() => setCartOpen(false)}
                className="text-xs text-gray-300 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="mt-3 space-y-3">
              {items.length === 0 && (
                <p className="text-xs text-gray-400">Your cart is empty.</p>
              )}
              {items.map((it) => (
                <div
                  key={it.key}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-200"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {it.name}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {Object.keys(it.options || {})
                        .map((k) => `${k}: ${it.options[k]}`)
                        .join(", ")}
                    </p>
                    <p className="mt-1 text-[11px] text-brand-gold">
                      {formatPriceKES(it.price)} × {it.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(it.key)}
                    className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-gray-200 hover:border-white/20"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-gray-200">
                  {["Dine-in", "Takeaway"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`rounded-xl border px-3 py-2 ${
                        orderType === type
                          ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  <p className="text-[11px] text-gray-400">Notes (optional)</p>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={2}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 p-2 text-xs text-gray-100 placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                    placeholder="e.g. Extra chilli, no onions"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-200">
                  <p>Subtotal</p>
                  <p className="font-semibold text-brand-gold">
                    {formatPriceKES(subtotal)}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={clear}
                    className="text-[11px] text-gray-300 hover:text-white"
                  >
                    Clear cart
                  </button>
                  <button
                    className="rounded-full bg-gradient-to-r from-brand-accent to-brand-gold px-4 py-2 text-sm font-semibold text-black shadow-soft"
                    onClick={handleCheckout}
                  >
                    Place order via WhatsApp
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-gray-400">
                  Payment via M-PESA will be completed in WhatsApp with the
                  cashier.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <FloatingButton count={items.length} onClick={() => setCartOpen(true)} />

      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

export default function ARPage() {
  return (
    <CartProvider>
      <ARScene />
    </CartProvider>
  );
}