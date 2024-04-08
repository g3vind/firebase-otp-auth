"use client"
import Login from "./Login"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "./config"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("./dashboard")
      }
    })
  }, [auth, router])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <Login />
    </main>
  )
}

export default Home
