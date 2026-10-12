import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../API/axios"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMsg("")

    try {
      const res = await api.post("/userApi/login", { email, password })
      if (res.data.token) {
        localStorage.setItem("token", res.data.token)
      }
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user))
      }
      navigate("/AdminDashboard")
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong"
      setErrorMsg(message)
    }
  }

  return (
    <section className="max-w-md mx-auto px-8 py-16">
      <h1 className="text-3xl font-serif font-bold border-l-4 border-red-600 pl-4 mb-8">
        Login
      </h1>

      {errorMsg && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 mb-4"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full"
        >
          Login
        </button>
      </form>
    </section>
  )
}