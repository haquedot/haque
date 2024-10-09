import { SocialLink } from "@/app/about/SocialLink";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
    company?: string;
    duration?: string;
    cgpa?: string;
    socials?: { id: number; name: string; icon: React.ReactNode; href: string }[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ${className}`}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.title && <CardTitle>{item.title}</CardTitle>}
            {item.name && <CardTitle>{item.name}</CardTitle>}
            {item.socials && (
              <SocialLink />
            )}
            {item.company && <CardDescription>{item.company}</CardDescription>}
            {item.duration && <CardDescription>{item.duration}</CardDescription>}
            {item.cgpa && <CardDescription>CGPA: {item.cgpa}</CardDescription>}
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 md:p-4 overflow-hidden bg-neutral-900 border border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm mt-3",
        className
      )}
    >
      {children}
    </p>
  );
};

export const ContactInfo = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 font-bold tracking-wide leading-relaxed text-md flex items-center",
        className
      )}
    >
      {children}
    </p>
  );
};
