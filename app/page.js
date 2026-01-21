export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">
          We-AR-Menu <span className="text-brand-gold">Demo</span>
        </h1>
        <p className="text-gray-300">
          If this text is centered and colored, Tailwind is working.
        </p>
        <button className="rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-black">
          Styled Tailwind Button
        </button>
      </div>
    </main>
  );
}