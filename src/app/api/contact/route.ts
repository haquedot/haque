import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: "New Contact Form Submission",
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message}</p>`,
        });

        return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
    }
}
