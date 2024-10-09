
import { IconBrandLinkedin, IconBrandGithub, IconBrandX, IconBrandInstagram, IconPhone, IconMail } from "@tabler/icons-react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

export const socials = [
    {
        id: 1,
        name: "LinkedIn",
        icon: <IconBrandLinkedin className="text-sky-500" />,
        href: "https://www.linkedin.com/in/haquedot/",
    },
    {
        id: 2,
        name: "GitHub",
        icon: <IconBrandGithub className="text-neutral-200" />,
        href: "https://github.com/haquedot",
    },
    {
        id: 3,
        name: "Twitter",
        icon: <IconBrandX className="text-sky-500" />,
        href: "https://twitter.com/haquedot",
    },
    {
        id: 4,
        name: "Instagram",
        icon: <IconBrandInstagram className="text-pink-500" />,
        href: "https://www.instagram.com/haquedot/",
    },
    {
        id: 5,
        name: "Phone",
        icon: <IconPhone className="text-green-500" />,
        href: "tel:+917502461630",
    },
    {
        id: 6,
        name: "Email",
        icon: <IconMail className="text-red-500 w-full" />,
        href: "mailto:haquedot@gmail.com",
    },
];
export default function Social() {
    return (
        <>
            <div className="py-10 px-4 w-full md:max-w-4xl mx-auto">
                <h1 className="mb-8 px-2 py-0.5 text-xs text-start text-[#40ffa3] border border-[#40ffa3] w-min rounded-3xl">Socials</h1>
                <div className="flex flex-col">
                    <div className="h-min flex flex-row justify-center w-full md:max-w-4xl grid grid-cols-4 sm:grid-cols-6 mx-auto gap-4">
                        <AnimatedTooltip items={socials} />
                    </div>
                </div>
            </div>
        </>
    )
}