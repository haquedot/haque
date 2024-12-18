"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Input Component
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 bg-zinc-800 text-black text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 placeholder:text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:ring-neutral-600 
            disabled:cursor-not-allowed disabled:opacity-50 
            shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

// TextArea Component
const TextArea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-gray-50 bg-zinc-800 text-black text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 placeholder:text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:ring-neutral-600 
            disabled:cursor-not-allowed disabled:opacity-50 
            shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

TextArea.displayName = "TextArea";

export { Input, TextArea };
