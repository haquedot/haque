// About.tsx
"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";
import { Tabs } from "../components/ui/tabs";
import { socials } from "./SocialLink";

export const aboutme = [
  {
    name: "MERAJUL HAQUE",
    description:
      "Final year B.Tech student specializing in Full Stack Development with expertise in React.js and the MERN stack. Strong foundation in programming, front-end and back-end development. Skilled in problem-solving, communication, and collaboration. Passionate about applying technical skills to impactful software projects and eager to continue learning and contributing to dynamic development teams"
  },
  {
    socials: socials,
  },
];

export const experience = [
  {
    title: "Software Developer Intern",
    company: "MeitY Project MANUU",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Developed a CMS dashboard for eDeekshaam, enhancing UI/UX and improving user interaction. Designed and implemented responsive Important Links and Events pages using React.js, boosting cross-browser compatibility and user engagement."
  },
  {
    title: "Web Developer Intern",
    company: "MeitY Project MANUU",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Created four interactive educational games (Identify Fruits, Identify Animals, Identify Vehicles, Body Parts). Worked closely with UX designers and back-end developers, ensuring seamless integration and a cohesive user experience"
  }
  // ...other experience details
];


export const education = [
  {
    title: "B.tech(LE) Computer Science",
    company: "Maulana Azad National Urdu University, Hyderabad",
    duration: "Oct 2022 - May 2025",
    cgpa: "8.67/10 (Till 6th semesters)",
    description: "Coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems, Software Engineering, Computer Networks, and Object-Oriented Programming.",
  },
  {
    title: "Diploma in Computer Science",
    company: "Maulana Azad National Urdu University, Hyderabad",
    duration: "Aug 2019 - Aug 2022",
    cgpa: "9.78/10",
    description: "Achieved 1st position.",
  }
  // ...other education details
];

export function About() {
  const tabs = [
    {
      title: "Details",
      value: "About Me",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <AboutMe />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "Experience",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <Experience />
        </div>
      ),
    },
    {
      title: "Education",
      value: "Education",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <Education />
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto px-4 py-10 md:max-w-4xl">
      <h1 className="mb-8 px-2 py-0.5 text-xs text-start text-[#40ffa3] border border-[#40ffa3] w-min rounded-3xl">About</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={aboutme} />
    </div>
  );
}
export function Experience() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={experience} />
    </div>
  );
}
export function Education() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={education} />
    </div>
  );
}