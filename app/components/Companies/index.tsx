"use client";
import { companiesData } from "@/app/data/companiesData";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

const data = companiesData;

export default class Companies extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      swipe: true,
      speed: 7000,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
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
