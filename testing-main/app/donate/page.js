"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => alert("Failed to load Razorpay script.");
    document.body.appendChild(script);

    // Open modal if ?modal=1 is present
    if (searchParams.get("modal") === "1") {
      setShowModal(true);
    }
  }, []);

  const handleDonate = async () => {
    if (!amount || amount < 1) {
      alert("Please enter a valid donation amount");
      return;
    }

    if (!razorpayLoaded || !window.Razorpay) {
      alert("Razorpay is not loaded. Please refresh and try again.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/razorpay", {
        method: "POST",
        body: JSON.stringify({ amount }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Your NGO Name",
        description: "Support our NGO",
        order_id: data.id,
        handler: function (response) {
          alert("Donation successful! Payment ID: " + response.razorpay_payment_id);
          setShowModal(false);
        },
        theme: { color: "#0f766e" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Error processing payment, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => router.push("/")}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
              Support Our Cause
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Your donation helps us provide essential services to those in need.
            </p>

            <div className="flex gap-2 justify-center mb-4">
              {[100, 250, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ease-in-out transform ${
                    amount == amt
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 hover:bg-green-100 hover:scale-105"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Or enter custom amount"
              className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-4 focus:ring-2 focus:ring-green-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              onClick={handleDonate}
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 hover:scale-105"
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 border-4 border-t-transparent border-green-600 rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                `Donate ₹${amount || ""}`
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
