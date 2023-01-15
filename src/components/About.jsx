import React from "react";
import aboutImage from "../assets/pic2.png";

const About = () => {
    const info = [
        { text: "Years Experience", count: "04" },
        { text: "Projects", count: "05" },
        { text: "Companies Work", count: "01" }
    ];
    return (
        <section id="about" className="py-10 text-white">
            <div className="mt-8 text-center">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="text-gray-400 my-6 p-2">
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam fugiat aperiam repellendus,
                            quisquam provident molestiae repellat, dolore quos
                            maxime optio excepturi eligendi dolorum? Eum
                            voluptatum sit consequatur deleniti! Natus,
                            blanditiis.
                        </p>
                        <div className="flex mt-10 items-center gap-7">
                            {info.map((content) => (
                                <div key={content.text}>
                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                        {content.count}{" "}
                                        <span className="text-cyan-600">+</span>
                                    </h3>
                                    <span className="md:text-base text-xs">{content.text}</span>
                                </div>
                            ))}
                        </div>
                        <br />
                        <br />
                        <a href="./src/assets/kishanResume.pdf" download>
                            <button className="btn-primary">
                                Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 md:mt-0 mt-10 flex justify-center items-center">
                      <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                        <img src={aboutImage} alt="" className="w-full object-cover bg-cyan-600 rounded-xl"/>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
