import React, {useState} from "react";


const Contact = () => {
    //   const contactInfo=[
    //     {logo:'mail', text:'kishanpoddar2002@gmail.com' },
    //     {logo:'logo-whatsapp', text:'kishanpoddar2002@gmail.com' },
    //     {logo:'mail', text:'kishanpoddar2002@gmail.com' }
    //   ]

    // const [values, setValues] = useState({username: '', email: '', subject: '', query: ''});
    // onChangeHandler = (event) => {
    //     setValues(()=>({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    // async function sendMessage(e){
    //     e.preventDefault();
    // }
    // async function sendMessage(e) {

    //     const response = await fetch("https://formspree.io/f/mwkjpawr", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(values)
    //     });
    // }
    
    // if (response.ok) {
    //     // success
    //     } else {
    //     // failure
    //     }
    
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">Contact <span className="text-cyan-600">Me</span></h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
                <div className="mt-10 flex md:flex-row flex-col max-w-3xl md:p-6 p-2 rounded-md mx-auto">
                  <form /* onSubmit={sendMessage}*/ action="https://formspree.io/f/mwkjpawr" method="post" className="flex flex-col flex-1 gap-5">
                        <div className="flex gap-4">
                            <div className="bg-box flex flex-col text-left w-1/2 visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Full Name</p>
                                <input type="text" name="username" placeholder="Name" required /*onChange={onChangeHandler}*/ className="p-0"/>
                            </div>
                            <div className="bg-box flex flex-col text-left w-1/2 visited:shadow-xl visited:shadow-yellow-400/40">
                                <p>Email</p>
                                <input type="Email" name="email" placeholder="E-Mail" required /*onChange={onChangeHandler}*/  className="p-0"/>
                                {/* <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p> */}
                            </div>
                        </div>
                        <div className="bg-box text-left">
                            <p>Subject</p>
                            <input type="Text" name="subject" placeholder="Subject" required /*onChange={onChangeHandler}*/  className="p-0"/>
                        </div>
                        <div className="bg-box text-left">
                            <p>Enter Your Message</p>
                            <textarea placeholder="Message" name="query" className="p-0 h-40 w-full resize-none" required /*onChange={onChangeHandler}*/ ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full flex justify-center mt-3">Send Message</button>
                  </form>
                </div>
            </div>
        </section>

        // <section id="contact" className="py-10 px-3 text-white">
        //     <div className="text-center mt-8">
        //         <h3 className="text-4xl font-semibold">
        //             Contact <span className="text-cyan-600">Me</span>
        //         </h3>
        //         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
        //         <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-6xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
        //           <form className="flex flex-col flex-1 gap-5">
        //             <input type="text" placeholder="Your Name" />
        //             <input type="Email" placeholder="Your Email Address" />
        //             <textarea placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
        //             <button className="btn-primary w-fit">Send Message</button>
        //           </form>
        //           <div className="flex flex-col gap-8">
        //             {
        //               contactInfo.map((contact,i)=>(
        //                 <div key={i} className="flex gap-4 w-fit items-center">
        //                   <div className="min-w-[3rem] text-2xl min-h-[3rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
        //                     <ion-icon name={contact.logo}></ion-icon>
        //                   </div>
        //                   <p className="text-base">{contact.text}</p>
        //                 </div>
        //               ))
        //             }
        //           </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Contact;