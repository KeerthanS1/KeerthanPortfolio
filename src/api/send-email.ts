import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Using EmailJS (free tier) - You'll need to sign up at https://www.emailjs.com/
    // Alternative: Nodemailer with Gmail (requires app password)

    // Method 1: EmailJS (Recommended for free tier)
    const emailJsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
            to_email: "your-email@gmail.com", // Your Gmail address
          },
        }),
      }
    );

    if (emailJsResponse.ok) {
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      throw new Error("Email service failed");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
