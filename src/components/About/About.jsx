import profile from '../../../public/sami.png'

const About = () => {
    return (
        <div className="mt-14 max-w-5xl mx-auto">
            <p className='text-center font-bold mb-3'>Get to know</p>
            <h2 className="text-center text-3xl font-bold mb-8 text-sky-500">About Me</h2>
            <div className='mx-3 md:mx-0'>
                <div className="hero">
                    <div className="hero-content flex-col gap-14 lg:flex-row">
                        <img
                            src={profile}
                            className="w-[500px] h-[300px] rounded-lg shadow-2xl" />
                        <div>
                            <p className="py-6">
                            I graduated with a degree in Computer Science and Engineering from East West University, majoring in Intelligent Systems and Data Science with a minor in Software Engineering. As a Full Stack Web Developer, I am proficient in React, Node.js, Express.js, and MongoDB. My technical expertise includes front-end and back-end development, creating dynamic and responsive web applications, and utilizing modern frameworks and libraries. I am meticulous, detail-oriented, and excel at solving complex problems, making me a valuable asset in cross-functional teams. I am enthusiastic about contributing to innovative projects and continuously expanding my skill set. My dedication to staying current with industry trends ensures that I am always prepared to implement the latest advancements in technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;