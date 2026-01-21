"use client";

import { useMemo, useState } from "react";
import { formatPriceKES } from "@/lib/utils";

export default function ItemModal({ item, isOpen, onClose, onAdd }) {
  const optionKeys = useMemo(
    () => Object.keys(item?.options || {}),
    [item?.options]
  );
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleSelect = (key, value) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleAdd = () => {
    onAdd(item, quantity, selectedOptions);
    onClose();
    setQuantity(1);
  };

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm md:items-center">
      <div className="w-full max-w-md rounded-t-2xl bg-brand-dark p-4 shadow-soft md:rounded-2xl md:mx-auto">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
              {item.category}
            </p>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-xs text-gray-300 mt-1">{item.description}</p>
            <p className="mt-2 text-sm font-semibold text-brand-gold">
              {formatPriceKES(item.price)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200 hover:bg-white/20"
          >
            Close
          </button>
        </div>

        {optionKeys.length > 0 && (
          <div className="mt-4 space-y-3">
            {optionKeys.map((key) => (
              <div key={key} className="space-y-2">
                <p className="text-xs font-semibold text-gray-200 capitalize">
                  {key}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(item.options[key] || []).map((value) => {
                    const active = selectedOptions[key] === value;
                    return (
                      <button
                        key={value}
                        onClick={() => handleSelect(key, value)}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          active
                            ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                            : "border-white/10 bg-white/5 text-gray-200 hover:border-white/20"
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-8 w-8 rounded-full border border-white/10 text-gray-200 hover:border-white/20"
            >
              –
            </button>
            <span className="w-6 text-center text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="h-8 w-8 rounded-full border border-white/10 text-gray-200 hover:border-white/20"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="rounded-full bg-gradient-to-r from-brand-accent to-brand-gold px-4 py-2 text-sm font-semibold text-black shadow-soft hover:brightness-110"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}