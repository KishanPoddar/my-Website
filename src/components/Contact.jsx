import React, { useState } from "react";

const Contact = () => {
    const [values, setValues] = useState({
      username: "", email: "", subject: "", query:"",
    });

    const validateInput = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const onSubmit = async(e)=>{
        e.preventDefault();
        if(!(validateEmail(values.email))){
            return window.alert('Enter the correct email')
        }
        try {
            const response = await fetch("https://formspree.io/f/mwkjpawr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          });
          if (response.ok) {
            window.alert('Message sent successfully')
            setValues({username: "", email: "", subject: "", query:"",})
        }
        } catch (error) {
            window.alert('Message not Sent')
        }
    }

    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">Contact <span className="text-cyan-600">Me</span></h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
                <div className="mt-10 flex md:flex-row flex-col max-w-3xl md:p-6 p-2 rounded-md mx-auto">
                  <form onSubmit={onSubmit} className="flex flex-col flex-1 gap-5">
                        <div className="flex sm:flex-row flex-col gap-4">
                            <div className="bg-box flex flex-col text-left sm:w-1/2 w-full visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Full Name</p>
                                <input onChange={validateInput} value={values.username} type="text" name="username" placeholder="Name" required className="p-0 w-full"/>
                            </div>
                            <div className="bg-box flex flex-col text-left sm:w-1/2 w-full visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Email</p>
                                <input onChange={validateInput} value={values.email} type="Email" name="email" placeholder="E-Mail" required  className="p-0 w-full"/>
                            </div>
                        </div>
                        <div className="bg-box text-left">
                            <p>Subject</p>
                            <input onChange={validateInput} value={values.subject} type="Text" name="subject" placeholder="Subject" required  className="p-0 w-full"/>
                        </div>
                        <div className="bg-box text-left">
                            <p>Enter Your Message</p>
                            <textarea onChange={validateInput} value={values.query} placeholder="Message" name="query" className="p-0 h-40 w-full resize-none" required ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full flex justify-center mt-3">Send Message</button>
                  </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;