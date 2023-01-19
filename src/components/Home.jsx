import React from "react";
// import profile from "../assets/pic2.png";

const Home = () => {
    const social = [
      {logo:'logo-github', link:'https://github.com/KishanPoddar'},
      {logo:'logo-linkedin', link:'https://www.linkedin.com/in/kishan-poddar-b350b01b1/'},
      {logo:'logo-instagram', link:'https://www.instagram.com/_._virtualdj_._/?hl=en'},
      {logo:'logo-twitter', link:'https://twitter.com/Kishan_Poddar_'},
    ]

    return (
        <section id="home" className="min-h-screen flex justify-center items-center py-10">
            <div className="mt-11">
                <div className="lg:text-left text-center">
                    <h1 className="lg:text-6xl sm:text-4xl text-2xl lg:leading-normal leading-10 text-white font-bold">
                        <div className="text-cyan-400 lg:text-6xl sm:text-5xl text-4xl">Hello!</div>
                        <div>My name is <span>KISHAN PODDAR</span></div>
                    </h1>
                    <h4 className="lg:text-2xl sm:text-xl text-sm lg:leading-normal leading-5 mt-2 font-bold text-gray-600">Game Developer | Full Stack Developer | Coder</h4>
                    <button className="btn-primary mt-8 shadow-lg shadow-cyan-400/50"><a href="#contact">Contact Me</a></button>
                    <div className="mt-8 text-3xl flex items-center lg:justify-start justify-center gap-5">
                      {
                        social?.map((icon)=>(
                          <div key ={icon} className='text-gray-500 hover:text-white cursor-pointer'>
                            <a href={icon.link} target="_blank"><ion-icon name={icon.logo}></ion-icon></a>
                          </div>
                        ))
                      }
                    </div>
                </div>
            </div>
        </section>

        // <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
        //     <div className="flex-1 flex items-center justify-center h-full">
        //         <img src={profile} alt="" className="md:w-11/12 h-full object-cover"/>
        //     </div>
        //     <div className="flex-1">
        //         <div className="md:text-left text-center">
        //             <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold">
        //                 <div className="text-cyan-600 md:text-6xl text-5xl">Hello!</div>
        //                 <div>My name is <span>KISHAN PODDAR</span></div>
        //             </h1>
        //             <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-gray-600">Game Developer | Full Stack Developer | Coder</h4>
        //             <button className="btn-primary mt-8">Contact Me</button>
        //             <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
        //               {
        //                 social?.map((icon)=>(
        //                   <div key ={icon} className='text-gray-500 hover:text-white cursor-pointer'>
        //                     <ion-icon name={icon}></ion-icon>
        //                   </div>
        //                 ))
        //               }
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Home;
