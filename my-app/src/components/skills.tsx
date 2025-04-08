import JavaScript from "../../public/skillsicons/JavaScript.svg";
import TypeScript from "../../public/skillsIcons/TypeScript.svg";
import Python from "../../public/skillsIcons/Python-Dark.svg";
import Go from "../../public/skillsIcons/GoLang.svg";
import HTML from "../../public/skillsIcons/HTML.svg";
import CSS from "../../public/skillsIcons/CSS.svg";
import TailwindCSS from "../../public/skillsIcons/TailwindCSS-Dark.svg";
import React from "../../public/skillsIcons/React-Dark.svg";
import Next from "../../public/skillsIcons/NextJS-Dark.svg";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-black text-[20px] ">Skill Set</div>
      <div className="flex flex-col items-center bg-gray-900 p-3 rounded-2xl w-[550px] ">
        <div className="m-2">Programming Language</div>
        <div className="flex">
          <Skill name={JavaScript}>JavaScript</Skill>
          <Skill name={TypeScript}>TypeScript</Skill>
          <Skill name={Python}>Python</Skill>
          <Skill name={Go}>Go</Skill>
        </div>
        <div className="m-2">Front-End</div>
        <div className="flex">
          <Skill name={HTML}>HTML</Skill>
          <Skill name={CSS}>CSS</Skill>
          <Skill name={TailwindCSS}>TailwindCSS</Skill>
          <Skill name={React}>React</Skill>
          <Skill name={Next}>Next</Skill>
        </div>
      </div>
    </div>
  );
};

export default Skills;
