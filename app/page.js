import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-md flex-col justify-between px-4 py-6">
      {/* Hero Section */}
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          WebAR Smart Menu • Chrome on Android recommended
        </div>

        <div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Experience your
            <span className="bg-gradient-to-r from-brand-gold to-brand-accent bg-clip-text text-transparent">
              {" "}
              menu in AR
            </span>
            .
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            We-AR-Menu lets guests scan a QR, place dishes on their table in
            augmented reality, and order seamlessly via WhatsApp.
          </p>
        </div>

        {/* Demo QR / Info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft">
          <p className="text-xs text-gray-300">
            For this demo, imagine you scanned a QR code at the restaurant. Tap
            below to view the smart menu in AR.
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
                Demo flow
              </p>
              <ol className="mt-1 space-y-1 text-[11px] text-gray-300">
                <li>1. Tap &ldquo;View Menu in AR&rdquo;</li>
                <li>2. Allow camera access (Chrome on Android)</li>
                <li>3. Place dishes on your table</li>
                <li>4. Add to cart &amp; order on WhatsApp</li>
              </ol>
            </div>
            <div className="hidden h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/40 text-[10px] text-gray-400 sm:flex">
              QR Demo
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Menu Preview */}
      <section className="mt-8 space-y-5">
        <Link
          href="/ar"
          className="group flex items-center justify-center rounded-full bg-gradient-to-r from-brand-accent to-brand-gold px-6 py-3 text-sm font-semibold text-black shadow-soft transition hover:shadow-lg hover:brightness-110"
        >
          View Menu in AR
          <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/20 text-[10px] group-hover:translate-x-0.5 transition">
            →
          </span>
        </Link>

        {/* Simple menu teaser (stub for now) */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-200">
              Today&apos;s highlights
            </p>
            <span className="text-[10px] text-gray-400">
              Powered by We-AR-Menu
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-gray-300">
            <div className="rounded-xl border border-white/5 bg-white/5 p-2">
              <p className="font-medium">Signature Burger</p>
              <p className="text-[10px] text-gray-400">
                See it on your table in AR.
              </p>
              <p className="mt-1 text-[11px] font-semibold text-brand-gold">
                KES 850
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-2">
              <p className="font-medium">Grilled Chicken</p>
              <p className="text-[10px] text-gray-400">
                Explore portions and sides visually.
              </p>
              <p className="mt-1 text-[11px] font-semibold text-brand-gold">
                KES 1,050
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}