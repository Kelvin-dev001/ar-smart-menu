import "./globals.css";

export const metadata = {
  title: "We-AR-Menu",
  description: "We-AR-Menu demo with Tailwind and App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-dark text-white">
        {children}
      </body>
    </html>
  );
}