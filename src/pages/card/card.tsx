import Navbar from "../../components/navbar";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p>shopping many products.</p>
      </div>
    </div>
  );
}
