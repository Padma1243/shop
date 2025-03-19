export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: "Smartphone", price: 20000, image: "/images/smartphone.jpg" },
    { id: 2, name: "Bluetooth", price: 5000, image: "/images/blutooth.jpg" },
    { id: 3, name: "Headphone", price: 2500, image: "/images/headphone1.jpg" },
    { id: 4, name: "Laptop", price: 45000, image: "/images/top.jpg" },
    { id: 5, name: "LED TV", price: 50000, image: "/images/tv.jpg" },
    { id: 6, name: "Tholkaapiyam", price: 20000, image: "/images/thol.jpg" },
    { id: 7, name: "Thirukural Book", price: 5000, image: "/images/thiru.webp" },
    { id: 8, name: "Kitchen Products", price: 2500, image: "/images/home.jpg" },
    { id: 9, name: "T-shirts", price: 45000, image: "/images/photo-1562157873-818bc0726f68.avif" },
    { id: 10, name: "Jeans", price: 50000, image: "/images/jeans.jpg" },
    { id: 11, name: "Toys for kids", price: 20000, image: "/images/toy2.jpg" },
    { id: 12, name: "Kids toys", price: 5000, image: "/images/toy1.jpg" },
    { id: 13, name: "Running shoes", price: 2500, image: "/images/shoes1.jpg" },
    { id: 14, name: "Tennis ball & bat", price: 45000, image: "/images/tennisbat.jpg" },
    { id: 15, name: "Football", price: 50000, image: "/images/football.jpg" }
  ];
  
  export default products;
  