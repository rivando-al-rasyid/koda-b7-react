import { useState, useContext } from "react";
import UserContext from "../context/user/context";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

function Login() {
    const { setIsLogin, setUser } = useContext(UserContext);
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (
            form.username === VALID_USERNAME &&
            form.password === VALID_PASSWORD
        ) {
            setUser((prev) => ({
                ...prev,
                username: form.username,
                profilePic: prev.profilePic || "https://i.pravatar.cc/300",
            }));
            setIsLogin(true);
            setError("");
        } else {
            setError("Username atau password salah.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    className="border p-2 rounded focus:outline-blue-500"
                    value={form.username}
                    onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded focus:outline-blue-500"
                    value={form.password}
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    required
                />
                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition"
                >
                    Masuk
                </button>
            </form>
        </div>
    );
}

export default Login;
