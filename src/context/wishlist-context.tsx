"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner"; // ✅ Import toast for notifications

// Define Wishlist Context Type
interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (id: number) => void;
  toggleWishlist: (id: number) => void;
}

// Create Context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Provider Component
export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Add to Wishlist
  const addToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
      toast.success("Added to Wishlist! ✅");
    }
  };

  // ✅ Toggle Wishlist (Adds if missing, removes if present)
  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        toast.error("Removed from Wishlist ❌");
        return prev.filter((item) => item !== id);
      } else {
        toast.success("Added to Wishlist! ✅");
        return [...prev, id];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
  return context;
};
