import resume from './Samiuls-Resume.pdf';

const Header = () => {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div className='-mt-10'>
                <h4 className="font-bold text-white text-center">Hello I am,</h4>
                <h2 className="font-bold text-5xl mb-6 mt-4 text-white">Samiul Hasan</h2>
            </div>
            <h3 className="font-bold text-sky-500 mb-8">Software Developer</h3>
            <div>
                <a className="btn btn-ghost border border-sky-500 text-sky-500 py-3 px-5 font-semibold mr-2" download href={resume}>Download Resume</a>
                <a className="btn btn-ghost border border-sky-500 py-3 px-5 bg-sky-500 font-semibold ml-2 text-white" href="#contact">Lets Talk</a>
            </div>
        </div>
    );
};

export default Header;
