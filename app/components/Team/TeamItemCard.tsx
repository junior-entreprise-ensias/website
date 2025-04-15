import React from "react";
import Image from "next/image";
import { TeamItem } from "@/app/types/team";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamItemCardProps {
  item: TeamItem;
}

const TeamItemCard = ({ item }: TeamItemCardProps) => {
  return (
    <div className="team-item rounded-lg border border-gray-200 shadow-md p-5 mx-1 mb-1 flex flex-col items-center justify-between gap-1">
      <div className="team-img mb-5">
        <Image
          src={`/assets/team/${item.img}`}
          alt={item.name}
          width={130}
          height={130}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="team-content flex flex-col items-center justify-center">
        <h3 className="text-md md:text-lg lg:text-xl text-center font-medium text-cinnabar-600 mb-2 text-truncate">
          {item.name}
        </h3>
        <p className="text-sm text-center text-gray-600 mb-2">{item.position}</p>
        <div className="team-social flex gap-2">
          <a
            href={`https://www.linkedin.com/in/${item.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cinnabar-600 hover:text-cinnabar-500"
          >
            <FaLinkedin />
          </a>
          <a
            href={`https://github.com/${item.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cinnabar-600 hover:text-cinnabar-500"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TeamItemCard;
