"use client";
import { PinContainer } from "../components/ui/3d-pin";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import farmOnHand from "/public/images/farmOndHand.png";
import farmOnHandLogo from "/public/images/farmOnHandLogo.svg";
import exceedRoboticsLogo from "/public/images/exceedRoboticsLogo.svg";
import exceedRobotics from "/public/images/exceedRobotics.png";
import elonaLogo from "/public/images/elonaLogo.svg";
import elona from "/public/images/elona.jpg";



import Image from "next/image";
import { StaticImageData } from "next/image";

import { Modal, ModalTrigger, ModalBody, ModalContent } from "../components/ui/animated-modal";
import { IconBrandGithub, IconArrowNarrowRight } from "@tabler/icons-react";
import { LinkPreview } from "../components/ui/link-preview";

// Define the Project type
interface Project {
    title: string;
    description: string;
    techStack: string;
    repo: string;
    liveUrl: string;
    imageProject: StaticImageData;
    projectLogo: StaticImageData;
}

export default function Project() {
    const [isClient, setIsClient] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const projects: Project[] = [
        {
            title: "FarmOnHand",
            description:
                "Developed FarmOnHand a web platform using the MERN stack to facilitate direct sales between farmers and consumers, enhancing transparency and efficiency in agricultural transactions. Implemented features such as product listings, order management, and payment processing.",
            techStack: "React, Node.js, Express, MongoDB, Bootstrap, Stripe",
            repo: "https://github.com/haquedot/FarmOnHand",
            liveUrl: "https://hibbanur-rahman.me/FarmOnHand",
            imageProject: farmOnHand,
            projectLogo: farmOnHandLogo,
        },
        {
            title: "ExceedRobotics",
            description: "Designed and developed program enrollment, camps and blog pages for Exceed Robotics. Utilized HTML, CSS, JavaScript, Bootstrap and JQuery to create user-friendly pages.",
            techStack: "HTML, CSS, JavaScript, Bootstrap, JQuery",
            repo: "https://github.com/haquedot/ExceedRobotics",
            liveUrl: "https://exceedrobotics.com/",
            imageProject: exceedRobotics,
            projectLogo: exceedRoboticsLogo,
        },
        {
            title: "Elona",
            description: "Developed a website using HTML, CSS, and JavaScript as a freelance project for a client. Implemented features such as a contact form, image gallery, and responsive design.",
            techStack: "HTML, CSS, JavaScript",
            repo: "#",
            liveUrl: "https://elona.fun/",
            imageProject: elona,
            projectLogo: elonaLogo,
        },

    ];

    function trimText(text: string, maxLength: number): string {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "";
    }


    return (
        <>

            <div className="mx-auto py-10 md:max-w-7xl">
                <h1 className="mx-4 px-2 py-0.5 text-xs text-start text-[#40ffa3] border border-[#40ffa3] w-min rounded-3xl">Projects</h1>
                <Modal>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <ModalTrigger
                                key={index}
                                onClick={() => setSelectedProject(project)}
                                className="py-16 sm:py-24 md:py-24"
                            >
                                <PinContainer
                                    title={project.title}
                                    href={project.liveUrl}
                                    containerClassName="flex justify-center items-center"
                                >
                                    <div className="flex flex-col items-center text-start space-y-4">
                                        <div className="flex items-start w-full">
                                            <Image
                                                src={project.projectLogo}
                                                alt={`${project.title} logo`}
                                                height={30}
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg text-slate-100 w-full text-start">
                                            {project.title}
                                        </h3>
                                        <p className="text-base text-slate-500">
                                            {trimText(project.description, 100)}
                                            <span className="text-slate-300"> Read more...</span>
                                        </p>
                                        <Image
                                            src={project.imageProject}
                                            alt={`${project.title} screenshot`}
                                            layout="responsive"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </PinContainer>
                            </ModalTrigger>
                        ))}
                    </div>
                    {selectedProject && <ProjectDetail project={selectedProject} />}
                </Modal>
            </div>
        </>
    );
}

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    return (
        <div className="max-w-5xl mx-auto">
            <ModalBody>
                <ModalContent className="h-full">
                    <div className="grid md:grid-cols-2 h-max">
                        <div className="flex flex-col justify-between p-6 md:p-12">
                            <div className="w-12 mb-4">
                                <Image
                                    src={project.projectLogo}
                                    alt={`${project.title} project`}
                                    layout="responsive"
                                />
                            </div>
                            <h4 className="text-lg md:text-2xl text-neutral-100 font-bold mb-4">
                                {project.title}
                            </h4>
                            <div>
                                <p className="text-base text-neutral-300 mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <div className="text-base text-neutral-300 mb-4">
                                <span className="font-bold">Tech Stack:</span> {project.techStack}
                            </div>
                            <div className="flex items-center">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-10 w-10 rounded-full bg-gray-50 bg-neutral-800 flex items-center justify-center me-3"
                                >
                                    <IconBrandGithub className="h-5 w-5 text-neutral-300" />
                                </a>
                                <LinkPreview url={project.liveUrl}
                                    className="flex items-center text-neutral-100">
                                    <div className="h-10 w-10 rounded-full bg-green-400 -me-5" />
                                    Live view <IconArrowNarrowRight className="h-5 w-5 text-neutral-300 ms-1" />
                                </LinkPreview>{" "}
                            </div>
                        </div>
                        <div className="flex items-end h-full p-6 md:p-0">
                            <Image
                                src={project.imageProject}
                                alt={`${project.title} project`}
                                layout="responsive"
                                className="rounded-lg md:rounded-none md:rounded-tl-2xl "
                            />
                        </div>
                    </div>
                </ModalContent>
            </ModalBody>
        </div>
    );
};
