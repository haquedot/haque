"use client";

import React from "react";

import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import html from "/public/images/html.svg";
import css from "/public/images/css.svg";
import js from "/public/images/js.svg";
import canva from "/public/images/canva.svg";
import react from "/public/images/react.svg";
import bootstrap from "/public/images/bootstrap.svg";
import github from "/public/images/github.svg";
import git from "/public/images/git.svg";
import figma from "/public/images/figma.svg";
import ai from "/public/images/ai.svg";

const skills = [
    {
        id: 1,
        name: "HTML",
        image: html.src,
    },
    {
        id: 2,
        name: "CSS",
        image: css.src,
    },
    // Repeat for all other skills...
    {
        id: 3,
        name: "JavaScript",
        image: js.src,
    },
    {
        id: 4,
        name: "Canva",
        image: canva.src,
    },
    {
        id: 5,
        name: "React",
        image: react.src,
    },
    {
        id: 6,
        name: "Bootstrap",
        image: bootstrap.src,
    },
    {
        id: 7,
        name: "GitHub",
        image: github.src,
    },
    {
        id: 8,
        name: "Git",
        image: git.src,
    },
    {
        id: 9,
        name: "Figma",
        image: figma.src,
    },
    {
        id: 10,
        name: "Adobe Illustrator",
        image: ai.src,
    },

];

export function Skill() {
    return (
        <div className="w-full py-10">
            <div className="w-full md:max-w-4xl mx-auto">
                <h1 className="mb-8 mx-5 px-2 py-0.5 text-xs text-start text-[#40ffa3] border border-[#40ffa3] w-min rounded-3xl">Skills</h1>
            </div>
            <div className="flex flex-col">
                <div className="h-min flex flex-row justify-center w-full md:max-w-4xl grid grid-cols-4 sm:grid-cols-8 mx-auto gap-4 px-4">
                    <AnimatedTooltip items={skills} />
                </div>
            </div>

        </div>
    );
}
