import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// TODO: read in from a yml file

export const experiencesData = [
  {
    title: "Completed MS in Computer Science",
    location: "Chicago, IL",
    description:
      "I graduated and immediately found a software engineering internship",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Software Engineering Intern",
    //company: "HERE Technologies",
    location: "Chicago, IL",
    description:
      "Implemented python modules for model verification and validation while honing my python & C++ skills",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Software Engineering Intern",
    //company: "NASA Johnson Space Center",
    location: "Houston, TX",
    description:
      "Authored python and MATLAB libraries to automate data cleaning, ingestion, and verification of pupillometery data. Engaged in research on the use of machine learning to predict cognitive workload of astronauts.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
  {
    title: "Software and Mission Operations Engineer",
    //company: "NASA Jet Propulsion Laboratory",
    location: "Pasadena, CA",
    description:
      "As a developer, I integrated telemetry into M20 visualization, developed and administered an AWS data-lake for 27 engineering teams, and adapted command schemas to meet requirements for the Sample Return Lander (SRL) project. In operations, I implemented a new command product paradigm, automated customer service processes through JIRA, lead operations support for 12 flight projects, hired, mentored, and managed 4 full-time operations engineers and 3 cohorts of interns.",
    icon: React.createElement(FaReact),
    date: "2019-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Raspberry Pi",
    description: "raspberry pi",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Web Development",
    description: "Web Dev",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "asdf",
    description: "dadfa",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Javascript",
  "Ruby",
  "Perl",
  "SQL",
  "AWS ElasticSearch/OpenSearch",
  "AWS Lambda",
  "AWS EC2",
  "AWS ECS",
  "AWS S3",
  "AWS IAM",
  "AWS APIGateway/R53",
  "AWS Cloudwatch",
  "AWS Cloudformation",
  "Serverless",
  "Terraform",
  "Docker",
  "Puppet ",
  "Tensorflow",
  "Keras",
  "Jupyter Notebooks",
  // NEW
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
] as const;
