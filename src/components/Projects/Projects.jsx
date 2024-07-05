import contest from '../../../public/ContestLab.png'
import crafter from '../../../public/CraftersCove.png'
import product from '../../../public/ProductVerse.png'

const Projects = () => {
    return (
        <div className="mt-16 max-w-5xl mx-auto">
            <p className='text-center font-bold mb-3'>My Work</p>
            <h2 className="text-center text-3xl font-bold mb-8 text-sky-500">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3">
                <div>
                    {/* project 1 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={contest}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                ContestLab
                            </h2>
                            <p>Contest Lab is a MERN stack base comprehensive platform for contest creation, participation, and management.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline"><a href="https://github.com/SamiulHasan-dev/contest-creation-platform">GitHub</a></div>
                                <div className="badge badge-outline"><a href="https://contest-lab-f764b.web.app">Live Link</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* project 12*/}
                    <div className="card bg-base-100  shadow-xl">
                        <figure>
                            <img
                                src={crafter}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Crafter Cove

                            </h2>
                            <p>Art & Craft StoreArt & Craft Store Crafters Cove is an platform where art and craft enthusiasts can showcase their creativity.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline"><a href="https://github.com/SamiulHasan-dev/art-and-craft-store">GitHub</a></div>
                                <div className="badge badge-outline"><a href="https://crafters-cove-e39bb.web.app">Live Link</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* project 3 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={product}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Product Verse
                            </h2>
                            <p>An Alternative Product Information System designed to revolutionize how users discover and evaluate products. </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline"><a href="https://github.com/SamiulHasan-dev/Alternative-Product-Information-System">GitHub</a></div>
                                <div className="badge badge-outline"><a href="https://product-verse.web.app">Live Link</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;