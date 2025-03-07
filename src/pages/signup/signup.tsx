import Navbar from "../../components/navbar";

export default function Signup() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Signup</h1>
        <form className="mt-4">
          <input type="text" placeholder="Name" className="border p-2 w-full mb-2" />
          <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
          <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
          <button className="bg-green-500 text-white p-2 w-full">Signup</button>
        </form>
      </div>
    </div>
  );
}
