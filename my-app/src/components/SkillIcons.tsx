import JavaScript from "../../public/skillsIcons/JavaScript.svg";
import TypeScript from "../../public/skillsIcons/TypeScript.svg";
import Python from "../../public/skillsIcons/Python-Dark.svg";
import Go from "../../public/skillsIcons/GoLang.svg";
import HTML from "../../public/skillsIcons/HTML.svg";
import CSS from "../../public/skillsIcons/CSS.svg";
import TailwindCSS from "../../public/skillsIcons/TailwindCSS-Dark.svg";
import React from "../../public/skillsIcons/React-Dark.svg";
import Next from "../../public/skillsIcons/NextJS-Dark.svg";
import Express from "../../public/skillsIcons/ExpressJS-Dark.svg";
import Django from "../../public/skillsIcons/Django.svg";
import Flask from "../../public/skillsIcons/Flask-Dark.svg";
import FastAPI from "../../public/skillsIcons/FastAPI.svg";
import PostgreSQL from "../../public/skillsIcons/PostgreSQL-Dark.svg";
import MySQL from "../../public/skillsIcons/MySQL-Dark.svg";
import Echo from "../../public/skillsIcons/Echo-New.png";
import Gin from "../../public/skillsIcons/Gin.png";
import Docker from "../../public/skillsIcons/Docker.svg";
import Git from "../../public/skillsIcons/Git.svg";
import GitHub from "../../public/profIcons/Github-Dark.svg";
import Varcel from "../../public/skillsIcons/Vercel-Dark.svg";
import Vite from "../../public/skillsIcons/Vite-Dark.svg";
import Node from "../../public/skillsIcons/NodeJS-Dark.svg";

import SkillIcon from "./SkillIcon";

const SkillIcons = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="font-black text-[20px] m-2 ">Skill Set</div>
      <div className="flex flex-col items-center bg-gray-950 p-3 rounded-2xl sm:w-[550px] ">
        <div className="m-2">Programming Language</div>
        <div className="flex">
          <SkillIcon name={JavaScript} description="JavaScript">
            JavaScript
          </SkillIcon>
          <SkillIcon name={TypeScript} description="TypeScript">
            TypeScript
          </SkillIcon>
          <SkillIcon name={Python} description="Python">
            Python
          </SkillIcon>
          <SkillIcon name={Go} description="Go">
            Go
          </SkillIcon>
        </div>
        <div className="m-2">Front-End</div>
        <div className="flex">
          <SkillIcon name={HTML} description="HTML">
            HTML
          </SkillIcon>
          <SkillIcon name={CSS} description="CSS">
            CSS
          </SkillIcon>
          <SkillIcon name={TailwindCSS} description="TailwindCSS">
            TailwindCSS
          </SkillIcon>
          <SkillIcon name={React} description="React">
            React
          </SkillIcon>
          <SkillIcon name={Next} description="Next">
            Next
          </SkillIcon>
        </div>
        <div className="m-2">Back-End</div>
        <div className="flex">
          <SkillIcon name={Express} description="Express">
            Express
          </SkillIcon>
          <SkillIcon name={Django} description="Django">
            Django
          </SkillIcon>
          <SkillIcon name={Flask} description="Flask">
            Flask
          </SkillIcon>
          <SkillIcon name={FastAPI} description="FastAPI">
            FastAPI
          </SkillIcon>
          <SkillIcon name={Echo} description="Echo">
            Echo
          </SkillIcon>
          <SkillIcon name={Gin} description="Gin">
            Gin
          </SkillIcon>
        </div>
        <div className="m-2">Database</div>
        <div className="flex">
          <SkillIcon name={PostgreSQL} description="PostgreSQL">
            PostgreSQL
          </SkillIcon>
          <SkillIcon name={MySQL} description="MySQL">
            MySQL
          </SkillIcon>
        </div>
        <div className="m-2">Others</div>
        <div className="flex">
          <SkillIcon name={Docker} description="Docker">
            Docker
          </SkillIcon>
          <SkillIcon name={Git} description="Git">
            Git
          </SkillIcon>
          <SkillIcon name={GitHub} description="GitHub">
            GitHub
          </SkillIcon>
          <SkillIcon name={Varcel} description="Varcel">
            Varcel
          </SkillIcon>
          <SkillIcon name={Vite} description="Vite">
            Vite
          </SkillIcon>
          <SkillIcon name={Node} description="Node">
            Node
          </SkillIcon>
        </div>
      </div>
    </div>
  );
};

export default SkillIcons;
