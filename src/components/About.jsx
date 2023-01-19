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
            <div className="text-center">
                <h3 className="text-4xl mb-5 font-semibold">
                    About <span className="text-cyan-400">Me</span>
                </h3>
                <div className="flex lg:flex-row flex-col-reverse items-center md:gap-6 md:px-14 p-7 xl:my-20 lg:my-7 my-14 gap-12 max-w-7xl mx-auto">
                    <div className="text-gray-400 m-4 p-2">
                        <p className="lg:text-left leading-7 lg:w-11/12 mr-auto text-lg mt-3 mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat aperiam repellendus, quisquam provident molestiae repellat, dolore quos maxime excepturi eligendi dolorum? Eum voluptatum sit consequatur deleniti! Natus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et consequatur porro nobis eveniet labore voluptas facilis error unde tempore voluptatibus quibusdam doloribus est sequi quod debitis, molestiae, quos modi! 
                        </p>
                        
                        {/* resume */}
                        <div className="mt-7">
                            <a href="./src/assets/kishanResume.pdf" download>
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

        // <section id="about" className="py-10 text-white">
        //     <div className="mt-8 text-center">
        //         <h3 className="text-4xl font-semibold">
        //             About <span className="text-cyan-600">Me</span>
        //         </h3>
        //         <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        //             <div className="text-gray-400 my-6 p-2">
        //                 <p className="text-justify leading-7 w-11/12 mx-auto">
        //                     Lorem ipsum dolor sit amet consectetur adipisicing
        //                     elit. Laboriosam fugiat aperiam repellendus,
        //                     quisquam provident molestiae repellat, dolore quos
        //                     maxime optio excepturi eligendi dolorum? Eum
        //                     voluptatum sit consequatur deleniti! Natus,
        //                     blanditiis.
        //                 </p>
        //                 <div className="flex mt-10 items-center gap-7">
        //                     {info.map((content) => (
        //                         <div key={content.text}>
        //                             <h3 className="md:text-4xl text-2xl font-semibold text-white">
        //                                 {content.count}{" "}
        //                                 <span className="text-cyan-600">+</span>
        //                             </h3>
        //                             <span className="md:text-base text-xs">{content.text}</span>
        //                         </div>
        //                     ))}
        //                 </div>
        //                 <br />
        //                 <br />
        //                 <a href="./src/assets/kishanResume.pdf" download>
        //                     <button className="btn-primary">
        //                         Download Resume
        //                     </button>
        //                 </a>
        //             </div>
        //             <div className="flex-1 md:mt-0 mt-10 flex justify-center items-center">
        //               <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
        //                 <img src={aboutImage} alt="" className="w-full object-cover bg-cyan-600 rounded-xl"/>
        //               </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default About;
