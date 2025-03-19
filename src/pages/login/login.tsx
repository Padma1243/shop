import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout";

const mockUser = {
  email: "test@example.com",
  password: "password123",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (mockUser && trimmedEmail === mockUser.email && trimmedPassword === mockUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleLogin}>
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-gray-600 text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
