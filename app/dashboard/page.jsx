"use client"

import { getAuth, signOut } from "firebase/auth"
import { app } from "../config"
import { useRouter } from "next/navigation"
const Dashboard = () => {
  const auth = getAuth(app)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl text-center mt-6">Welcome to Dashboard</h1>
      {/* <Image src={"/welcome.jpg"} alt="Welcome" height={500} width={500} /> */}
      <button
        onClick={handleLogout}
        className="rounded-md bg-black px-5 py-3 mt-8 text-md font-semibold text-white shadow-sm hover:bg-black/80 "
      >
        Log Out
      </button>
    </div>
  )
}

export default Dashboard
