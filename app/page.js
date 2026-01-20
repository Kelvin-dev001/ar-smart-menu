export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-brand-dark text-white">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">
          We-AR-Menu <span className="text-brand-gold">Demo</span>
        </h1>
        <p className="text-sm text-gray-300">
          If this text is centered and colored, Tailwind is working.
        </p>
      </div>
    </div>
  );
}