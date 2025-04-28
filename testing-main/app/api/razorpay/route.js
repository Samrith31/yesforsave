import Razorpay from "razorpay";

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { amount } = await req.json();

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert amount to paise
      currency: "INR",
      receipt: `receipt_${Math.random().toString(36).substring(7)}`,
      payment_capture: 1,
    });

    // Return order details as JSON
    return new Response(
      JSON.stringify({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return new Response(
      JSON.stringify({ error: "Error creating Razorpay order" }),
      { status: 500 }
    );
  }
}
