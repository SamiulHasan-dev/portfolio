import { FaUserGraduate } from "react-icons/fa";



const Education = () => {
    return (
        <div className="max-w-5xl mx-auto my-16">
            <p className='text-center font-bold mb-3'>My education</p>
             <h2 className="text-3xl text-center font-bold text-sky-500 mb-8">Qualification</h2>
            <div className="hero">
                <div className="hero-content flex-row">
                    <div className="divider divider-horizontal"></div>
                    <div className="space-y-2">
                        <p><FaUserGraduate className="text-2xl text-sky-500" /></p>
                        <h3 className="text-2xl font-bold">East West University</h3>
                        <h4 className="text-xl">B.Sc in Computer Science and Engineering</h4>
                        <p><span className="font-bold">Major:</span> Intelligent Systems and Data Science</p>
                        <p><span className="font-bold">Minor:</span> Software Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;