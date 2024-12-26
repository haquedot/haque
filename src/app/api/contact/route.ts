import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        // Set up the transporter for sending emails
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: "New Contact Form Submission",
            text: message,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        // Respond with success message
        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error: unknown) {
        // Handle errors properly
        if (error instanceof Error) {
            console.error("Error sending email:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }

        return NextResponse.json(
            { message: "Failed to send message." },
            { status: 500 }
        );
    }
}
