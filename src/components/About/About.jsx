import profile from '../../../public/sami.png'

const About = () => {
    return (
        <div className="mt-14 max-w-5xl mx-auto">
            <p className='text-center font-bold mb-3'>Get to know</p>
            <h2 className="text-center text-3xl font-bold mb-8 text-sky-500">About Me</h2>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col gap-14 lg:flex-row">
                        <img
                            src={profile}
                            className="w-[500px] h-[300px] rounded-lg shadow-2xl" />
                        <div>
                            <p className="py-6">
                                I earned my degree in computer science and engineering from East West University. I put a lot of effort into my
                                studies, consider things thoroughly, and get along well with individuals. I enjoy the challenging tasks that
                                require solving problems and developing new skills. I Have experienced Front End Developer with hands-on experience in identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs and wireframes into high-quality code, and writing application interface code via JavaScript and React JS workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to bolster overall performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;