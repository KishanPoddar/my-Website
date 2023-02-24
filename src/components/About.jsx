import React from "react";
import aboutImage from "../assets/pic2.png";

const About = () => {
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl mb-5 font-semibold">
                    About <span className="text-cyan-400">Me</span>
                </h3>
                <div className="flex lg:flex-row flex-col-reverse items-center md:gap-6 md:px-14 p-7 xl:my-20 lg:my-7 my-14 gap-12 max-w-7xl mx-auto">
                    <div className="text-gray-400 m-4 p-2">
                        <p className="lg:text-left leading-7 lg:w-11/12 mr-auto text-lg mt-3 mb-10">
                            Hello, I am Kishan Poddar currently pursuing my Bachelor's Degree from Chandigarh University in Computer Science Engineering with a specialization in Graphics and Gaming. I am a Game Developer as well as a MERN developer who has a DSA interest in C++. I am a optimistic person and a hungry learner with time management skills who performs well in a team specially as a team leader.
                        </p>
                        
                        {/* resume */}
                        <div className="mt-7">
                            <a href="https://drive.google.com/file/d/1DkJmV4L2NajOwSFW20lA0auewP2YLWyd/view?usp=share_link" target="_blank">
                                <button className="btn-primary">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="xl:w-96 sm:w-80 w-60 h-full relative aboutImg">
                            <img src={aboutImage} alt="" className="w-full object-cover bg-cyan-400 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
