import Navbar from "../../components/navbar";

export default function Signup() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h1>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
            <button 
              className="bg-green-500 text-white p-3 w-full rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Signup
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
