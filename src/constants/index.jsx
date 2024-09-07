import { BiLogoPostgresql } from "react-icons/bi";
import { BsSearchHeart } from "react-icons/bs";
import { FaJsSquare, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";

import brij from "../assets/brij.jpg";
import claimslate from "../assets/claimslate.png";
import kozo from "../assets/dashboard.png";
import portfolio from "../assets/portfolio.png";
import proapp from "../assets/proapp.png";
import socialstar from "../assets/socialstar.jpg";
import etc from "../assets/void.png";
import zebpay from "../assets/zebpay.png";

export const NAVIGATION_LINKS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Award", href: "#award" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export const PROFILE = {
    name: "Tarang Jain",
    info: "Front-end developer crafting seamless, intuitive digital interfaces.",
};

export const ABOUT = {
    text1: {
        part1: `Transforming `,
        part2: `ideas `,
        part3: `into immersive `,
        part4: `digital experiences`,
    },
    text2: `I'm a Front-end developer based in Mumbai with a strong focus on crafting pixel-perfect, user-centric designs that enhance digital experiences. With 3+ years of experience in the industry, I specialize in building responsive, efficient, and visually engaging websites using modern technologies like React and Next.js. While Front-end development is my primary passion, my adaptability has allowed me to contribute across other tech stack. I've had the opportunity to work on backend systems, gaining two years of experience, and have also delved into mobile development using React Native. This versatility enables me to seamlessly integrate with various teams and pick up new challenges, ensuring that I can deliver high-quality solutions wherever they are needed.`,
};

export const PROJECTS = [
    {
        title: "ProApp - Mobile App",
        subtitle: "A Digital Design Academy platform built with React-Native.",
        link: "https://www.proapp.design/",
        image: proapp,
    },
    {
        title: "Zebpay - Dashboard",
        subtitle:
            "India's most trusted cryptocurrency exchange developed using Next.Js and Emotion.",
        link: "https://zebpay.com/exchange/MATIC-INR",
        image: zebpay,
    },
    {
        title: "Claimslate",
        subtitle:
            "An innovative Litigation platform based in Australia developed using Next.Js",
        image: claimslate,
    },
    {
        title: "Personal Portfolio",
        subtitle:
            "Personal portfolio website designed with React and Tailwind CSS.",
        image: portfolio,
    },
    {
        title: "Socialstar",
        subtitle:
            "A platform that enables organisations to achieve sustainability goals by enabling their employees to create social impact.",
        link: "https://socialstar.co/",
        image: socialstar,
    },
    {
        title: "Kozo",
        subtitle:
            "An Expense Management platform utilized by film industry leaders like YRF, Dharma, Netflix-IN, etc.",
        link: "https://www.gokozo.com/",
        image: kozo,
    },
    {
        title: "Brij Cinema",
        subtitle:
            "Brij, a Vue.Js powered cinema management solution, offers flexible integration options for a more comprehensive experience.",
        link: "https://www.brij.tech/",
        image: brij,
    },
    {
        title: "Many More...into the void",
        subtitle:
            "Oh, those were the days! I worked on countless projects for companies that... well, let's just say they're now part of history. 💀",
        image: etc,
    },
];

export const SKILLS = [
    {
        icon: <FaJsSquare className="text-4xl text-yellow-400 lg:text-6xl" />,
        name: "JavaScript",
        experience: "3+ years",
    },
    {
        icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-6xl" />,
        name: "React",
        experience: "3+ years",
    },
    {
        icon: <TbBrandNextjs className="text-4xl text-white lg:text-6xl" />,
        name: "Next.js",
        experience: "2.5+ year",
    },
    {
        icon: (
            <RiTailwindCssFill className="text-4xl text-teal-600 lg:text-6xl" />
        ),
        name: "Tailwind CSS",
        experience: "1+ year",
    },
    {
        icon: <SiMongodb className="text-4xl text-green-600 lg:text-6xl" />,
        name: "MongoDB",
        experience: "1.5+ years",
    },

    {
        icon: <FaNodeJs className="text-4xl text-green-600 lg:text-6xl" />,
        name: "Node.js",
        experience: "2+ years",
    },
    {
        icon: (
            <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-6xl" />
        ),
        name: "PostgreSQL",
        experience: "1+ year",
    },
];

export const ACHIEVEMENT = {
    title: "International Hackaton - Tokyo",
    award: "Gold Medalist - 2024",
    description:
        "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};
//  =[
//     {
//         title: "Front-End Developer",
//         company: "Binary Numbers",
//         description:
//             "Developed and maintained Cinema industry web applications, contributing across multiple areas of the product lifecycle and quickly adapting to tech upskilling to Fullstack developer",
//         icon: FaVuejs,
//         date: "2019 - 2020",
//     },
//     {
//         title: "Front-End Developer",
//         company: "Sapio Analytics",
//         description:
//             "Developed and maintained Cinema industry web applications, contributing across multiple areas of the product lifecycle and quickly adapting to tech upskilling to Fullstack developer",
//         icon: FaReact,
//         date: "2020",
//     },

//     {
//         title: "Full-Stack Developer",
//         company: "",
//         description:
//             "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//         icon: FaReact,
//         date: "2021 - present",
//     },
// ];
export const EXPERIENCES = [
    {
        title: "Graduated College",
        company: "Usha Pravin Gandhi College",
        description:
            "I graduated after 6 months of studying I found an internship as a front-end developer.",
        icon: LuGraduationCap,
        date: "2019",
        techstack: ["B.Sc - Information Technology"],
    },
    {
        title: "Full Stack Developer",
        company: "Binary Numbers",
        description:
            "Directed UI development for Kozo, enhancing budget tracking accuracy by 25%. Produced dashboards for UnPaniq using ReactJs and improved data retrieval by 30%.",
        date: "2019 - 2020",
        icon: FaVuejs,
        techstack: ["React", "Vue", "Express", "Node", "MYSQL", "Bootstrap"],
    },
    {
        title: "Frontend Developer",
        company: "Sapio Analytics",
        description:
            "Collaborated on the development of Enumerator using ReactJs, boosting user satisfaction scores by 30%. Visualized COVID data with D3.js for Covid'19 DSS.",
        date: "2020",
        icon: FaReact,
        techstack: [
            "React",
            "MaterialUI",
            "ChakraUI",
            "D3.js",
            "Chart.js",
            "Semantic UI",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Socialstar",
        description:
            "Transformed products with ReactJs, NextJs, and GraphQL, reducing development time by 40%. Managed technology infrastructure, increasing reliability by 25%.",
        date: "2020 - 2022",
        icon: FaNodeJs,
        techstack: [
            "React",
            "Next.js",
            "Prisma",
            "TypeScript",
            "GraphQL",
            "PostGreSQL",
            "Styled Components",
        ],
    },

    {
        title: "Frontend Developer",
        company: "ProCreator",
        description:
            "Led the development of ProApp using React Native, enhancing user engagement by 25%. Redesigned Zebpay's user dashboard, improving navigation for 5M+ traders.",
        date: "2022",
        icon: TbBrandReactNative,
        techstack: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "Tailwind CSS",
            "Emotion",
        ],
    },
    {
        title: "Frontend Developer",
        company: "ALLPS",
        description:
            "Spearheaded the creation of a digital tool using Next.js and Tailwind CSS, optimizing content creation and boosting artist throughput by 3.5x. Improved SEO and load time through optimization techniques.",
        date: "2023",
        icon: RiNextjsFill,
        techstack: ["React", "Next.js", "Tailwind CSS", "Shadcn"],
    },
    {
        end: true,
        title: "",
        company: "",
        description: "",
        date: "2024",
        icon: BsSearchHeart,
        techstack: [],
    },
];

export const TESTIMONIALS = [
    {
        name: "Smitha N",
        title: "Manager",
        quote: "Tarang is passionate about writing code and solving the problems through the development of creative and innovative software. He has tremendous potential. Tarang is vocal about his software ideas, but respects his superiors and enthusiastically tackles every assignment as he is directed. He is friendly, easy to get along with, well-liked by his co-workers. Tarang stays up-to-date on the latest techniques in software development.",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFa2xg8HB6VfA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516806827760?e=1729728000&v=beta&t=Yr4rNBThDKBa5-rUVMGCPkgcGDCrGg90DLKnLMHv9GQ",
    },
    {
        name: "Poonam Dhoot",
        title: "Manager/ Data Engineer",
        quote: "a passionate, enthusiastic and curious developer. During his tenure in Sapio he worked on multiple projects with very strict deadlines but he performed extremely well even under pressure.",
        image: "https://media.licdn.com/dms/image/v2/C5103AQFphSakGBvCjg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1582520240226?e=1729728000&v=beta&t=8w6jD9Begl1NsuoPW8h4MOKCEaBzhvn6DXSJJzQicts",
    },
    {
        name: "Sakshi Ranka",
        title: "Front-end Developer",
        quote: "A diligent Front End Developer who knows what he does and always comes straight to the fact. He is a fast learner with good coding skills. He stays in touch with latest trends in technology and always aims to inculcate this knowledge in his projects. During my tenure of working with him at Sapio, he helped me understand a lot of things and grow as a developer and I can vouch that he is a nice and competent person to work with.",
        image: "https://media.licdn.com/dms/image/v2/C5103AQEds6lpw6XMKg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1561792019149?e=1729728000&v=beta&t=RoA0kNnYP2Y4Z95_fJK6MIhSKwjIb_c39lqEK0HBiPg",
    },
    {
        name: "Kritika Mehta",
        title: "Product Designer",
        quote: "I have worked with Tarang Jain, he is amazing developer pays attention to detail, very hard working and good team player.",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHOCnGuP_Sr3g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1599583242455?e=1729728000&v=beta&t=xzFFx70zt9uYMX_1G0RbLz4ro7dIGdSkBxzWD3WfdVM",
    },
];

export const SOCIAL_MEDIA_LINKS = [
    // {
    //     href: "#",
    //     icon: (
    //         <FaFacebook
    //             fontSize={25}
    //             className="hover:opacity-80"
    //         />
    //     ),
    // },
    {
        href: "https://www.discordapp.com/users/852840146495340564",
        icon: (
            <FaDiscord
                fontSize={25}
                className="hover:opacity-80"
            />
        ),
    },
    {
        href: "https://www.instagram.com/tarang._",
        icon: (
            <FaInstagram
                fontSize={25}
                className="hover:opacity-80"
            />
        ),
    },
    {
        href: "https://x.com/Tdevjs",
        icon: (
            <FaXTwitter
                fontSize={25}
                className="hover:opacity-80"
            />
        ),
    },
    {
        href: "https://github.com/tarang369",
        icon: (
            <FaGithub
                fontSize={25}
                className="hover:opacity-80"
            />
        ),
    },
    {
        href: "https://www.linkedin.com/in/tdev",
        icon: (
            <FaLinkedin
                fontSize={25}
                className="hover:opacity-80"
            />
        ),
    },
];
