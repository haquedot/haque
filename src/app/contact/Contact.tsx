"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../components/ui/label";
import { Input, TextArea } from "../components/ui/input";
import { SocialLink } from "../about/SocialLink";

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const form = e.currentTarget; 
        setLoading(true);
        setError(null);
        setSuccess(false);
    
        const formData = new FormData(form); 
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };
    
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            if (!res.ok) {
                throw new Error("Failed to send message.");
            }
    
            form.reset();
            setSuccess(true);
    
            setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
            setError(err.message || "An error occurred while sending the message.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="md:h-screen w-full flex items-center justify-center rounded-none shadow-input bg-black px-4 py-10 md:py-0">
            <form
                className="border-2 border-zinc-800 p-4 md:p-6 rounded-2xl w-full sm:w-8/12 lg:w-4/12"
                onSubmit={handleSubmit}
            >
                <h2 className="font-bold text-xl text-neutral-300 mb-8">
                    Contact Me
                </h2>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                        name="name"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        name="email"
                        required
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <TextArea
                        id="message"
                        placeholder="Type your message..."
                        rows={4}
                        name="message"
                        required
                    />
                </LabelInputContainer>
                <button
                    className="mb-4 bg-gradient-to-br relative group/btn from-black from-zinc-900 to-zinc-900 to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
                {success && (
                    <p className="text-green-500 text-center mb-4">
                        Message sent successfully!
                    </p>
                )}
                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}
                <SocialLink />
            </form>
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
