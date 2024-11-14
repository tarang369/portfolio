import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { BsDownload } from "react-icons/bs";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                Experience
            </h2>
            <VerticalTimeline lineColor="rgb(250, 204, 21)">
                {EXPERIENCES.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={experience.date}
                        dateClassName="text-yellow-500"
                        icon={React.createElement(experience.icon)}
                        iconStyle={{
                            background: experience.end
                                ? "#fff"
                                : "rgb(250, 204, 21)",
                            color: "#000",
                            marginTop: experience.end && "0rem",
                        }}
                        contentStyle={{
                            display: experience.end ? "none" : "block",
                            background: "#fff",
                            color: "#000",
                            boxShadow: "0 3px 0 rgb(250, 204, 21)",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(250, 204, 21)",
                        }}
                    >
                        {!experience.end && (
                            <>
                                <h3 className="vertical-timeline-element-title font-extrabold">
                                    {experience.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle italic">
                                    {experience.company}
                                </h4>
                                {/* <p>{experience.description}</p> */}
                                {experience.techstack.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {experience.techstack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="select-none items-center whitespace-nowrap rounded-3xl bg-yellow-400 px-2.5 py-1 text-xs font-bold uppercase text-black"
                                            >
                                                <span>{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <div className="container mx-auto flex flex-col gap-2 timeline:mt-12">
                <p className="text-center text-white">2024</p>
                <h3 className="text-center font-semibold timeline:text-2xl">
                    Actively Looking for growth opportunities
                </h3>
            </div>
            <a
                aria-label="Download resume"
                href="../../public/assets/Tarang_Jain_Resume.pdf"
                download="Tarang_Jain_Resume.pdf"
                target="_blank"
                className="mx-auto mt-8 flex w-32 items-center justify-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-center text-lg font-semibold text-slate-950 hover:bg-yellow-500"
            >
                <BsDownload /> Resume
            </a>
        </section>
    );
};

export default Experience;
