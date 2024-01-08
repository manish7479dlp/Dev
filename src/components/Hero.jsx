import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import bannerLink from ".././img/home-image.png";

const Hero = () => {
  return (
    <div className="container mt-14 py-8 md:py-14">
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-16">
        <div className="md:basis-1/2 lg:basis-2/5">
          <img className="w-60 md:w-full" src={bannerLink} alt="img" />
        </div>

        <div className=" text-center space-y-5 md:basis-1/2 lg:basis-3/5 md:text-start ">
          <h1 className="text-3xl font-bold md:text-4xl ">
            Random jokes generator using API (Free)
          </h1>
          <p className="text-sm text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nisi dicta eveniet eos fugiat, quisquam suscipit et inventore officia! Atque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vero,
            tenetur quod earum perspiciatis cum voluptates consectetur
            voluptatem laborum non. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aspernatur, voluptates.
          </p>
          <div className="flex justify-center items-center gap-10 md:justify-start md:gap-20">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-yellow-400 text-4xl"
              />
              <br />
              Git-Hub
            </div>

            <div className="text-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-yellow-400 text-4xl"
              />
              <br />
              G-Mail
            </div>

            <div className="text-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-yellow-400 text-4xl"
              />
              <br />
              Instagram
            </div>
          </div>
          <div className="">
            <a
              href="#"
              className=" py-2 px-8 bg-yellow-400 text-black rounded-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
