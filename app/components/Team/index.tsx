import BlurFade from "@/app/magicui/ui/blur-fade";
import Marquee from "@/app/magicui/ui/marquee";
import { teamData } from "../../data/teamData";
import TeamItemCard from "./TeamItemCard";
import Image from "next/image";

const team = teamData;

const Team = () => {
  return (
    <div id="team">
      <div className="mx-auto my-10 py-5 sm:py-20">
        <BlurFade inView={true}>
          <div className="section-title relative text-center px-5 pb-5 mb-10">
            <h5 className="text-xl md:text-2xl font-medium text-cinnabar-600 uppercase mb-2">
              Our Team
            </h5>
            <h1 className="text-2xl md:text-4xl mb-0">
              Meet the Team Behind the Magic
            </h1>
          </div>
          <div className="relative w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:60s]">
              {team.map((item, index) => (
                <TeamItemCard key={index} item={item} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-[0] w-1/5 md:w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-[0] w-1/5 md:w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Team;
