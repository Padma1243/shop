import { useRouter } from "next/router";
import Image from "next/image";

const products = [
  { id: 1, name: "Smartphone", price: 10000, image: "/images/smartphone.jpg", description: "Latest 5G smartphone with 128GB storage." },
  { id: 2, name: "shoe", price: 1500, image: "/images/shoose2.jpg", description: "Runnning shoes." },
  
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <div className="p-6">
      <Image src={product.image} alt={product.name} width={320} height={256} className="rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 text-lg">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;


