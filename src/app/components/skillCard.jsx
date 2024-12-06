import React from "react";
import { Code, Server, Database, Layers } from "lucide-react";
import skills from "@/app/data/skills";


const SkillsCard = ({title, icon}) => {
  return (

    <div className="w-40 h-40 bg-white flex justify-center flex-col items-center border p-4 shadow-lg rounded-lg">
       <div className=" flex self-center aspect-square justify-center ">{icon}</div>
      <div className=" flex self-center mt-3 font-sans text-xl uppercase font-medium">
        {title}
      </div>
    </div>
  );
};

export default SkillsCard;
