import React from 'react'
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgLink from "../img/home-image.png"

const Hero = () => {
  return (
    <div className='container py-16 flex flex-col items-center gap-5 md:flex-row md:gap-10 md:py-32'>
        <div className='md:basis-1/2 lg:basis-2/5'>
            <img src={imgLink} alt='img' className='w-60 md:w-full'/>
        </div>
        <div className='flex flex-col text-center gap-5 px-5 md:basis-1/2 lg:basis-3/5 md:text-start'>
            <h1 className='text-3xl font-bold'>Murshidabad College of Engineering and Technology</h1>
            <p className='text-sm text-slate-500'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam beatae asperiores veritatis rem sequi libero nulla harum, aliquid, voluptatem quibusdam, quos fugiat. Ipsum, illum voluptas ut explicabo modi, eligendi, praesentium quas earum voluptate quisquam facere?
            </p>
            <div className='flex justify-center md:justify-start'>
                <div className='flex gap-10  '>
                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faGithub} className='text-yellow-400'/>
                        <br/>
                        Github
                    </div>

                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faInstagram} className='text-yellow-400'/>
                        <br/>
                        Instagram
                    </div>

                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faGithub} className='text-yellow-400'/>
                        <br/>
                        Github
                    </div>
                    
                </div>
            </div>

            <div className='mt-5'>
                <a href="#" className='py-2 px-4 bg-yellow-400 rounded-md text-black hover:opacity-[.8] opactiy-1'>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Hero