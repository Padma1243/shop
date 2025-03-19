import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // Redirect if not logged in
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome! You are logged in.</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}