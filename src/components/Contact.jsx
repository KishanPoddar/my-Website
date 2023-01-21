import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">Contact <span className="text-cyan-600">Me</span></h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
                <div className="mt-10 flex md:flex-row flex-col max-w-3xl md:p-6 p-2 rounded-md mx-auto">
                  <form action="https://formspree.io/f/mwkjpawr" method="post" className="flex flex-col flex-1 gap-5">
                        <div className="flex sm:flex-row flex-col gap-4">
                            <div className="bg-box flex flex-col text-left sm:w-1/2 w-full visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Full Name</p>
                                <input type="text" name="username" placeholder="Name" required className="p-0 w-full"/>
                            </div>
                            <div className="bg-box flex flex-col text-left sm:w-1/2 w-full visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Email</p>
                                <input type="Email" name="email" placeholder="E-Mail" required  className="p-0 w-full"/>
                            </div>
                        </div>
                        <div className="bg-box text-left">
                            <p>Subject</p>
                            <input type="Text" name="subject" placeholder="Subject" required  className="p-0 w-full"/>
                        </div>
                        <div className="bg-box text-left">
                            <p>Enter Your Message</p>
                            <textarea placeholder="Message" name="query" className="p-0 h-40 w-full resize-none" required ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full flex justify-center mt-3">Send Message</button>
                  </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;