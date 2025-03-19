import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      localStorage.setItem("isLoggedIn", "true"); // Store login state
      router.push("/dashboard"); // Redirect after successful signup
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className={`bg-blue-500 text-white p-3 w-full rounded-lg font-semibold transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link href="/login/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
