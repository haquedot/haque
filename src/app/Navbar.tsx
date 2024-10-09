import React from "react";
import { FloatingDock } from "./components/ui/floating-dock";
import {
    IconUser,
    IconMessage,
    IconBrandBlogger,
    IconSettings,
    IconCube,
    IconSocial,
} from "@tabler/icons-react";

import haquedot from "/public/images/haquedot.png";
import Image from "next/image";

export function Navbar() {
    const links = [
        {
            title: "Socials",
            icon: (
                <IconSocial className="h-full w-full text-neutral-400" />
            ),
            href: "/social",
        },
        {
            title: "Projects",
            icon: (
                <IconCube className="h-full w-full text-neutral-400" />
            ),
            href: "/project",
        },
        {
            title: "Skills",
            icon: (
                <IconSettings className="h-full w-full text-neutral-400" />
            ),
            href: "/skill",
        },
        {
            title: "Haque",
            icon: (
                <Image
                    src={haquedot}
                    alt="haque."
                    className="h-full w-full"
                />

            ),
            href: "/",
            noBackground: true, // Add a flag for no background
        },

        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-400" />
            ),
            href: "/about",
        },
        {
            title: "Blogs",
            icon: (
                <IconBrandBlogger className="h-full w-full text-neutral-400" />
            ),
            href: "/blog",
        },
        {
            title: "Contact",
            icon: (
                <IconMessage className="h-full w-full text-neutral-400" />
            ),
            href: "/contact",
        },
    ];
    return (
        <div className="fixed mx-auto w-min z-50 bottom-5 right-5 md:right-0 md:left-0">
            <FloatingDock
                mobileClassName="fixed bottom-5 right-5" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
