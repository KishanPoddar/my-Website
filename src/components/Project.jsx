import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import flipRunner from "../assets/FlipRunner.png";
import jiggleDog from "../assets/JiggleDog.png";

const Project = () => {
  const projects=[
    {img:flipRunner, name:'Flip Runner', githubLink:'https://github.com/', downloadLink:'https://drive.google.com/file/d/114sNRq2poRgLTDc7uP3q8TquriU3CBit/view?usp=sharing'},
    {img:jiggleDog, name:'Jiggle Dog', githubLink:'https://github.com/', downloadLink:'https://drive.google.com/file/d/1GHTzWyzf5Z_h-1NUmSsBFv3PPcYPWIWG/view?usp=sharing'},
  ];
    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-400"> Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My Awesome Works</p>
            </div>

            <div className="flex max-w-7xl px-5 mt-9 mx-auto items-center relative">
                <div className="w-full">
                    <Swiper
                        // slidePreview={1.2}   
                        spaceBetween={30}
                        breakpoints={{
                            1024:{
                                slidesPerView:2
                            },
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
                                <img src={ProjectInfo.img} alt="" height={500} width={500} className="rounded-lg w-full" />
                                <h3 className="sm:text-xl text-lg pl-2 my-4">{ProjectInfo.name}</h3>
                                <div className="flex gap-3 pl-2">
                                    <a href={ProjectInfo.githubLink} target="_blank" className="text-cyan-400 bg-gray-800 md:px-4 px-3 py-2 inline-block rounded-xl md:text-lg text-base">Github</a>
                                    <a href={ProjectInfo.downloadLink} target="_blank" className="text-cyan-400 bg-gray-800 md:px-4 px-3 py-2 inline-block rounded-xl md:text-lg text-base" >Downlaod</a>
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
