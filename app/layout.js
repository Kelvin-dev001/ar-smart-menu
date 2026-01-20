import "./globals.css";

export const metadata = {
  title: "We-AR-Menu | Experience the serve before the order!",
  description:
    "We-AR-Menu is a WebAR smart menu platform for restaurants. View dishes in augmented reality and order via WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-dark text-white">
        <div className="min-h-screen flex flex-col">
          {/* Simple top bar for branding */}
          <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
            <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-accent to-brand-gold shadow-soft flex items-center justify-center text-xs font-bold">
                  AR
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-wide">
                    We-AR-Menu
                  </p>
                  <p className="text-[11px] text-gray-300">
                  Experience the serve before the order!
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-300 border border-white/10">
                Demo
              </span>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/10 bg-black/60">
            <div className="mx-auto max-w-md px-4 py-3 text-center text-[11px] text-gray-400">
              Built with love in Kenya • Payments via M-PESA will be completed
              in WhatsApp with the cashier.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}