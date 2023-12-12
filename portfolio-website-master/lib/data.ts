import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaPhp } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { PiExamFill } from "react-icons/pi";
import catImg from "@/public/cat.png";
import rdsImg from "@/public/RDS.png";

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

export const experiencesData = [
  {
    title: "Iloilo National High School - SHS",
    location: "Iloilo City, Iloilo",
    description:
      "I graduated as a Senior High, and took 3 entrance exams for WVSU, University of Cebu, and ISAT-U . I ultimately chose the latter.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Internship",
    location: "Iloilo City, Iloilo",
    description:
      "I graduated college earning my degree in Information Technology. I immediately found a job as an IT Support",
    icon: React.createElement(LuLeaf),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Iloilo Science and Technology University",
    location: "Iloilo City, Iloilo",
    description:
      "I graduated college earning my degree in Information Technology. I immediately found a job as an IT Support",
    icon: React.createElement(LuGraduationCap),
    date: "July 2023",
  },
  {
    title: "Accentline Inc.",
    location: "Iloilo City, Iloilo",
    description:
      "I'm currently an IT Support and still continuously honing my skills/stack. I'm currently interested in learning React or Next.js as well as frameworks for PHP. I'm open to full-time opportunities.",
    icon: React.createElement(FaPhp),
    date: "August 2023 - present",
  },
  {
    title: "Passed Professional Civil Service Examination",
    location: "Iloilo City, Iloilo",
    description:
      "I passed the CSC Professional Exam.",
    icon: React.createElement(PiExamFill),
    date: "August 2023",
  }
] as const;

export const projectsData = [
  {
    title: "RDS-EMB",
    description:
      "I collaborated as a support system developer on this project during my internship. This system is used by the records section of the EMB-DENR.",
    tags: ["Native PHP", "Vanilla Javascript", "Bootstrap","HTML"],
    imageUrl: rdsImg,
  },
  {
    title: "Cat Generator",
    description:
      "An image generator using the Cataas API. Displayed principles of promise chaining in Javascript as well as basic API principles",
    tags: ["JavaScript", "Public API", "HTML", "CSS"],
    imageUrl: catImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Typescript"
] as const;
