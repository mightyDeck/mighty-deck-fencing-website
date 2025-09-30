// File: app/api/quote/route.js

import { NextResponse } from "next/server";
//@ts-ignore
import nodemailer from "nodemailer";

// Configure the transporter outside of the handler to reuse the connection
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

export async function POST(req: any) {
  try {
    // Parse the request body
    
    const { firstName, lastName, phone, email, zipCode,address, message } =
      await req.json();

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL, // The email address that will receive the quote requests
      subject: "New Fence Quote Request",
      text: `
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Address: ${address}
Zip Code: ${zipCode}
Project Details: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    // Log the error for debugging
    console.error("Error sending email:", err);

    // Return an error response
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
