"use client";
import { companiesData } from "@/app/data/companiesData";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const data = companiesData;

// CAROUSEL SETTINGS
export default class Companies extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="mx-auto">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i}>
              <Image
                className="mx-auto"
                src={item.logo}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
