import { IoLogoGithub } from 'react-icons/io';
import resume from './Samiuls-Resume.pdf';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div className='-mt-10'>
                <h4 className="font-bold text-white text-center">Hello I am,</h4>
                <h2 className="font-bold text-5xl mb-6 mt-4 text-white">Samiul Hasan</h2>
            </div>
            <p className='font-bold text-sky-500 mb-8'>
            <Typewriter
                words={['Software Developer', 'Web App Developer']}
                loop={100}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                wrapperClassName="font-bold text-sky-500 mb-8"
                cursorClassName="Typewriter__cursor"
            />
            </p>
        
            <div>
                <a className="btn btn-ghost border border-sky-500 text-sky-500 py-3 px-5 font-semibold mr-2" download href={resume}>Download Resume</a>
                <a className="btn btn-ghost border border-sky-500 py-3 px-5 bg-sky-500 font-semibold ml-2 text-white" href="https://www.linkedin.com/in/samiul-hasan-mim">Follow Me <FaLinkedin /></a>
            </div>
            <div className='flex gap-6 pt-10 items-center'>
                <a href="https://www.facebook.com/samiul.hasan.735"><SiFacebook className='text-[#0866ff] rounded-full  text-2xl bg-white' /></a>
                <a href="https://github.com/SamiulHasan-dev"><IoLogoGithub className="text-white text-2xl" /></a>
                <a href="https://x.com/samiul_1998"><FaTwitter className='text-sky-600 text-2xl mt-1' /></a>
            </div>
        </div>
    );
};

export default Header;
