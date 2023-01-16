import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import project from "../assets/pic2.png";

const Project = () => {
  const projects=[
    {img:project, name:'Demo', githubLink:'https://github.com/', downloadLink:'https://drive.google.com'},
    {img:project, name:'Demo', githubLink:'https://github.com/', downloadLink:'https://drive.google.com'},
    {img:project, name:'Demo', githubLink:'https://github.com/', downloadLink:'https://drive.google.com'},
    {img:project, name:'Demo', githubLink:'https://github.com/', downloadLink:'https://drive.google.com'},
  ];
    return (
        <section id="project" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600"> Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My Awesome Works</p>
            </div>
            <br />
            <div className="flex max-w-6xl px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidePreview={1.2}
                        spaceBetween={20}
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
                          <SwiperSlide key={i}>
                            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                <img
                                    src={ProjectInfo.img}
                                    alt=""
                                    className="rounded-lg"
                                />
                                <h3 className="text-xl my-4">{ProjectInfo.name}</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={ProjectInfo.githubLink}
                                        target="_blank"
                                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href={ProjectInfo.downloadLink}
                                        target="_blank"
                                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                    >
                                        Downlaod
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                      }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Project;
