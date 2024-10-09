import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function HeroSection() {
    return (
        <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Haque<span className="text-[#40ffa3]">.</span>
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto py-3 text-sm text-center relative z-10">
                    Passionate | Experienced | Collaborative
                </p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
