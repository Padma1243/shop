import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context"; // ✅ Fixed spelling
import Navbar from "@/components/navbar"; // Navbar is included globally
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <WishlistProvider>
        <Navbar /> 
        <Toaster richColors />
        <Component {...pageProps} />
      </WishlistProvider>
    </CartProvider>
  );
}
