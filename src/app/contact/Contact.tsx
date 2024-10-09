"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../components/ui/label";
import { Input, TextArea } from "../components/ui/input";
import { SocialLink } from "../about/SocialLink";



export function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted");
    };
    return (
        <div className="md:h-screen w-full flex items-center justify-center rounded-none md:rounded-2xl shadow-input bg-black px-4 py-10 md:py-0">

            <form className="border-2 border-zinc-800 p-4 md:p-6 rounded-2xl w-full sm:w-8/12 lg:w-4/12" onSubmit={handleSubmit}>
                <h2 className="font-bold text-xl text-neutral-300 mb-8">
                    Contact Me
                </h2>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" type="text" name="name" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="Enter your email" type="email" name="email"/>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <TextArea id="message" placeholder="Type your message..." rows={4} name="message"/>
                </LabelInputContainer>
                <button
                    className=" mb-8 bg-gradient-to-br relative group/btn from-black from-zinc-900 to-zinc-900 to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send
                    <BottomGradient />
                </button>
                <SocialLink />
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

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
