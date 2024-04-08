import { useState, useEffect } from "react"
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import { app } from "./config"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useRouter } from "next/navigation"

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [confirmation, setConfirmation] = useState(null)
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")

  const auth = getAuth(app)
  const router = useRouter()

  const notify = (msg) => toast(msg)

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {},
        expiredCallback: () => {},
      }
    )
  }, [auth])

  // PHONE NUMBER HANDLER FUNCTION
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  // OTP HANDLER FUNCTION
  const handleOtpChange = (e) => {
    setOtp(e.target.value)
  }

  // SENDING OTP HANDLER FUNCTION
  const handleSendOtp = async () => {
    try {
      setLoading(true)
      const formattedPhoneNumber = `${countryCode}${phoneNumber.replace(
        /\D/g,
        ""
      )}`
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        window.recaptchaVerifier
      )
      setConfirmation(confirmation)
      setOtpSent(true)
      notify("OTP has been sent!")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // HANDLE OTP SUBMIT
  const handleOtpSubmit = async () => {
    try {
      setLoading(true)
      await confirmation.confirm(otp)
      setOtp("")
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col m-4 justify-center items-center">
      <ToastContainer position="top-center" />

      <div>
        {/* Country Code Dropdown */}
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border border-gray-500 p-2 rounded-md"
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (US)</option>
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter Your Phone Number"
          className="border border-gray-500 p-2 rounded-md ml-2"
        />

        {/* OTP Input */}
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
          className="border border-gray-500 ml-2 p-2 rounded-md"
        />

        {/* SUBMIT BUTTON */}
        <button
          onClick={otpSent ? handleOtpSubmit : handleSendOtp}
          disabled={loading} // Disable button when loading
          className={`bg-${
            otpSent ? "green" : "blue"
          }-500 text-white p-2 rounded-md m-2`}
          style={{ backgroundColor: otpSent ? "green" : "blue" }}
        >
          {loading ? "Loading..." : otpSent ? "Submit OTP" : "Generate OTP"}
        </button>
      </div>

      <div className="mt-4">
        {!otpSent ? (
          <div>
            <div id="recaptcha-container"></div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Login
