import Navbar from "../../components/navbar";

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              className="bg-blue-500 text-white p-3 w-full rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
          Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
