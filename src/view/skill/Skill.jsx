import React from "react";
import "./Skill.css";
import { FaFlutter } from "react-icons/fa6";

export default function Skill() {
  const skillList = [
    {
      skill: "Flutter",
      img: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
      description:
        "Expertise in developing cross-platform applications with a single codebase, leveraging Dart for seamless UI design, state management, and integration with APIs for dynamic functionality.",
    },
    {
      skill: "React",
      img: "https://img.icons8.com/color/48/000000/react-native.png",
      description:
        "Proficient in building responsive web applications with React, utilizing React Hooks for state management, and integrating with RESTful APIs for dynamic functionality.",
    },
    {
      skill: "Node",
      img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      description: "Skilled in building scalable and efficient server-side applications using this JavaScript runtime, with expertise in handling asynchronous programming, RESTful API development, and integrating with databases for dynamic backend solutions.",
    },
    {
      skill: "ExpressJS",
      img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
      description:
        "Proficient in building fast and scalable web applications using this lightweight Node.js framework, with expertise in creating RESTful APIs, middleware integration, and backend logic for robust server-side solutions.",
    },
    {
      skill: "MongoDB",
      img: "https://img.icons8.com/?size=100&id=cREyrHivHRHF&format=png&color=000000",
      description : "Proficient in designing and managing NoSQL databases, with expertise in creating collections, documents, and indexes for efficient data storage and retrieval.",
    },
    {
        skill: "Firebase",
        img: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
        description : "Skilled in leveraging Firebase for building real-time applications, with expertise in integrating Firebase Authentication, Firestore, and Cloud Functions for dynamic functionality and seamless user experience."
    }
  ];
  return (
    <div className="skill" id="skill">
      <h2>Skills</h2>
      <div className="skills-section">
        {skillList.map((skill, index) => (
          <div className="skill-item">
            <div className="skill-logo">
              <img src={skill.img} alt="react" />
            </div>
            <h3>{skill.skill}</h3>
            <p>
             {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
