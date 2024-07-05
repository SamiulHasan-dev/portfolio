import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto my-16">
            <p className='text-center font-bold mb-3 mt-10'>Get In Touch
            I do receive your messages and will respond asap if <br /> the valid email is provided :)</p>
            <h2 className="text-center text-3xl font-bold mb-8 text-sky-500">Contact</h2>
            <div className="flex w-full flex-col justify-around lg:flex-row">
                <div className="card grid">
                    <div className="mx-5 md:mx-0">
                        <div className="bg-base-300 px-5 py-12 rounded-xl mb-5">
                            <p className=""><IoIosMail className="text-sky-500 text-2xl mb-2" /></p>
                            <p>samiul.199897@gmail.com</p>
                        </div>
                        <div className="bg-base-300 px-5 py-12 rounded-xl">
                            <p><FaPhoneAlt className="text-sky-500 mb-2 text-xl" /></p>
                            <p>+8801767483333</p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card bg-base-300 w-full max-w-sm flex-1 shrink-0 shadow-2xl mx-auto md:mx-0">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-500 text-white">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;