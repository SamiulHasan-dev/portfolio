import { CiStar } from "react-icons/ci";


const Skills = () => {
    return (
        <div className="max-w-5xl mx-auto mt-14">
            <p className='text-center font-bold mb-3'>The Skills I Have</p>
            <h2 className="text-3xl text-center font-bold text-sky-500">Skills</h2>
            <div className="border border-sky-500 w-[90%] md:w-[60%] mx-auto rounded-2xl mt-8 py-6 px-10">
                <h2 className="text-2xl text-center font-semibold mb-6 text-sky-500">Web Development</h2>
                <div className="grid grid-cols-2 gap-5 md:w-[70%] mx-auto md:mr-8">
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />HTML5</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />CSS3</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />Tailwind CSS</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />Daisy UI</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />JavaScript</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />DOM</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />React</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />Node.JS</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500 " />Express.JS</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />MongoDB</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />Firebase</p>
                <p className="flex gap-2 items-center font-bold"><CiStar className="font-bold text-2xl text-sky-500" />JWT</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;