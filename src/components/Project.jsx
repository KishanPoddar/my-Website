import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import flipRunner from "../assets/FlipRunner.png";
import jiggleDog from "../assets/JiggleDog.png";
import spaceShooter from "../assets/SpaceShooter.png";
import BloggingKishan from "../assets/BloggingKishan.png";
import KishanBook from "../assets/KishanBook.png";

const Project = () => {
  const projects=[
    {img:flipRunner, name:'Flip Runner', githubLink:'https://github.com/KishanPoddar/Flip-Runner', downloadLink:'https://drive.google.com/file/d/114sNRq2poRgLTDc7uP3q8TquriU3CBit/view?usp=sharing'},
    {img:jiggleDog, name:'Jiggle Dog', githubLink:'https://github.com/KishanPoddar/Jiggle-Dog', downloadLink:'https://drive.google.com/file/d/1GHTzWyzf5Z_h-1NUmSsBFv3PPcYPWIWG/view?usp=sharing'},
    {img:spaceShooter, name:'Space Shooter', githubLink:'https://github.com/KishanPoddar/Space-Shooter', downloadLink:'https://drive.google.com/file/d/1VzqDMdbBcicgJYfJ3rjYHtvXaG3y2S9k/view?usp=share_link'},
    {img:BloggingKishan, name:'Blogging Kishan', githubLink:'https://github.com/KishanPoddar/Blogging-Website', viewLink:'https://bloggingkishan.onrender.com/'},
    {img:KishanBook, name:'Kishan Book', githubLink:'https://github.com/KishanPoddar/KishanBook', viewLink:'https://kishanbook.onrender.com/'},
  ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-400"> Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My Awesome Works</p>
            </div>

            <div className="flex max-w-6xl px-5 mt-9 mx-auto items-center relative">
                <div className="w-full">
                    <Swiper
                        // slidepreview={1.2}   
                        spaceBetween={30}
                        breakpoints={{
                            768:{
                                slidesPerView:2
                            }
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                      {
                        projects?.map((ProjectInfo,i)=>(
                          <SwiperSlide key={i} className="mt-5 flex justify-center">
                            <div className="h-fit md:w-full w-9/12 sm:p-4 p-3 bg-slate-700 rounded-xl">
                                <div className=" w-full flex justify-center h-64">
                                    <img src={ProjectInfo.img} alt="" className="rounded-lg object-contain" />
                                </div>
                                <h3 className="sm:text-xl text-lg pl-2 my-4">{ProjectInfo.name}</h3>
                                <div className="flex gap-3 ">
                                    <a href={ProjectInfo.githubLink} target="_blank" className="text-cyan-400 bg-gray-800 md:px-4 px-3 py-2 inline-block rounded-xl md:text-lg sm:text-base text-sm">Github</a>
                                    {
                                        ProjectInfo.downloadLink ? (
                                            <a href={ProjectInfo.downloadLink} target="_blank" className="text-cyan-400 bg-gray-800 md:px-4 px-3 py-2 inline-block rounded-xl md:text-lg sm:text-base text-sm" >Downlaod</a>
                                            ):(
                                            <a href={ProjectInfo.viewLink} target="_blank" className="text-cyan-400 bg-gray-800 md:px-4 px-3 py-2 inline-block rounded-xl md:text-lg sm:text-base text-sm" >View Page</a>
                                        )
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                      }
                      <div className="my-12"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Project;
