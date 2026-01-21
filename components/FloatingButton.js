"use client";

export default function FloatingButton({ count = 0, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-gold text-black shadow-soft hover:brightness-110"
    >
      🛒
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black/80 px-1 text-[11px] font-semibold text-brand-gold">
          {count}
        </span>
      )}
    </button>
  );
}