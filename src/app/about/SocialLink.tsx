import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconBrandLinkedin, IconBrandGithub, IconBrandX, IconBrandInstagram, IconPhone, IconMail } from "@tabler/icons-react";

// Define the socials array
export const socials = [
    {
        id: 1,
        name: "LinkedIn",
        icon: <IconBrandLinkedin className="text-sky-500 h-6 w-6" />,
        href: "https://www.linkedin.com/in/haquedot/",
    },
    {
        id: 2,
        name: "GitHub",
        icon: <IconBrandGithub className="text-neutral-200 h-6 w-6" />,
        href: "https://github.com/haquedot",
    },
    {
        id: 3,
        name: "Twitter",
        icon: <IconBrandX className="text-sky-500 h-6 w-6" />,
        href: "https://twitter.com/haquedot",
    },
    {
        id: 4,
        name: "Instagram",
        icon: <IconBrandInstagram className="text-pink-500 h-6 w-6" />,
        href: "https://www.instagram.com/haquedot/",
    },
    {
        id: 5,
        name: "Phone",
        icon: <IconPhone className="text-green-500 h-6 w-6" />,
        href: "tel:+917502461630",
    },
    {
        id: 6,
        name: "Email",
        icon: <IconMail className="text-red-500 h-6 w-6" />,
        href: "mailto:haquedot@gmail.com",
    },
];

export const SocialLink = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <>
            <div
                className=
                "grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 h-full">
                {socials.map((social) => (
                    <motion.a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        onMouseEnter={() => setHovered(social.id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`relative mx-auto rounded-full flex items-center justify-center bg-neutral-800 p-2 w-12 h-12`}
                    >
                        <AnimatePresence>
                            {hovered === social.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, y: 2, x: "-50%" }}
                                    className="absolute -top-7 left-6 px-2 py-0.5 text-neutral-200 text-xs bg-neutral-800 block rounded-md z-20"
                                >
                                    {social.name}
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.div className="flex items-center justify-center bg-gray-50 bg-neutral-800 rounded-full m-auto">
                            {social.icon}
                        </motion.div>
                    </motion.a>
                ))}
            </div >
        </>
    );
};
