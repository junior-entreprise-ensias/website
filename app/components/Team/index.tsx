"use client";
import BlurFade from "@/app/magicui/ui/blur-fade";
import Marquee from "@/app/magicui/ui/marquee";
import { teamData } from "../../data/teamData";
import TeamItemCard from "./TeamItemCard";
import Slider from "react-slick";
import { Component } from "react";

const team = teamData;

export default class Team extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div id="team">
        <div className="mx-auto px-5 sm:px-24 py-20">
          <span className="opacity-0">.</span>
          <BlurFade inView={true}>
            <div className="section-title relative text-center px-5 pb-5 mb-10">
              <h5 className="text-xl md:text-2xl font-medium text-cinnabar-800 uppercase mb-2">
                Our Team
              </h5>
              <h1 className="text-2xl md:text-4xl mb-0">
                Meet the Team Behind the Magic
              </h1>
            </div>
            <div className="relative w-full overflow-hidden">
              <Slider {...settings}>
                {team.map((item, index) => (
                  <TeamItemCard key={index} item={item} />
                ))}
              </Slider>
              <div className="pointer-events-none absolute inset-y-0 left-[0] w-1/5 md:w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-[0] w-1/5 md:w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </BlurFade>
        </div>
      </div>
    );
  }
}
