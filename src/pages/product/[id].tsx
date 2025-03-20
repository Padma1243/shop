"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import WishlistButton from "@/components/wishlistbutton";
import { useCart } from "@/context/cart-context";
import ReviewForm from "@/components/reviewform";
import ReviewList from "@/components/reviewlist";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
  reviews?: Review[];
}

const products: Product[] = [
  { id: 1, name: "Smartphone", price: 20000, image: "/images/smartphone.jpg", description: "A high-performance smartphone with advanced features.", reviews: [] },
  { id: 2, name: "Bluetooth", price: 5000, image: "/images/blutooth.jpg", description: "Wireless Bluetooth speaker with deep bass and high clarity.", reviews: [] },
  { id: 3, name: "Headphone", price: 2500, image: "/images/headphone1.jpg",  description: "Noise-canceling headphones with crystal clear sound quality.", reviews: [] },
  { id: 4, name: "Laptop", price: 45000, image: "/images/top.jpg", description: "Powerful laptop with fast processing speed and large storage.", reviews: [] },
  { id: 5, name: "LED TV", price: 50000, image: "/images/tv.jpg", description: "Ultra HD 4K LED TV with smart features and HDR support.", reviews: [] },
  { id: 6, name: "Tholkaapiyam", price: 20000, image: "/images/thol.jpg", description: "A classic Tamil literary work with deep insights.", reviews: [] },
  { id: 7, name: "Thirukural Book", price: 5000, image: "/images/thiru.webp", description: "A collection of moral verses from ancient Tamil literature.", reviews: [] },
  { id: 8, name: "Kitchen Products", price: 2500, image: "/images/home.jpg", description: "Essential kitchen accessories for modern cooking.", reviews: [] },
  { id: 9, name: "T-shirts", price: 45000, image: "/images/photo-1562157873-818bc0726f68.avif",  description: "Comfortable and stylish cotton t-shirts.", reviews: [] },
  { id: 10, name: "Jeans", price: 50000, image: "/images/jeans.jpg", description: "Classic denim jeans with a perfect fit.", reviews: [] },
  { id: 11, name: "Toys for kids", price: 20000, image: "/images/toy2.jpg",  description: "Fun and educational toys for children.", reviews: [] },
  { id: 12, name: "Kids toys", price: 5000, image: "/images/toy1.jpg", description: "Safe and engaging toys for toddlers.", reviews: [] },
  { id: 13, name: "Running shoes", price: 2500, image: "/images/shooo.jpg",  description: "Lightweight and durable running shoes.", reviews: [] },
  { id: 14, name: "Tennis ball & bat", price: 45000, image: "/images/tennisbat.jpg", description: "A perfect set for tennis enthusiasts.", reviews: [] },
  { id: 15, name: "Football", price: 50000, image: "/images/football.jpg", description: "Premium quality football for professional and casual play.", reviews: [] },
  { id: 16, name: "Couch", price: 5500, image: "/images/shopha.jpg", description: "A comfortable and stylish couch for your living room.", reviews: [] },
];



const ProductDetail = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || !router.query.id) return;

    const productId = Number(router.query.id);
    if (isNaN(productId)) {
      setLoading(false);
      return;
    }

    const foundProduct = products.find((p) => p.id === productId) || null;
    setProduct(foundProduct);

    // Load reviews from localStorage if available
    if (foundProduct) {
      const savedReviews = localStorage.getItem(`reviews-${productId}`);
      setReviews(savedReviews ? JSON.parse(savedReviews) : foundProduct.reviews || []);
    }

    setLoading(false);
  }, [router.isReady, router.query.id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-gray-700">Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-red-600">❌ Product Not Found</h1>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  const addReview = (newReview: Review) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image src={product.image} alt={product.name} width={400} height={300} priority className="rounded-lg shadow-md object-cover w-full max-w-sm" />
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-2xl font-semibold text-gray-700">₹{product.price}</p>
              <p className="text-gray-600">{product.description}</p>

              <WishlistButton productId={product.id} />

              <button
                onClick={handleAddToCart}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <ReviewList reviews={reviews} />
          <ReviewForm addReview={addReview} />
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetail;
