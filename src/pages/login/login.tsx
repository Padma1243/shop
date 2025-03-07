import Navbar from "../../components/navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
          <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
          <button className="bg-blue-500 text-white p-2 w-full">Login</button>
        </form>
      </div>
    </div>
  );
}
