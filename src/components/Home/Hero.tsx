import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
    <div className="container px-4 mx-auto mt-12">
        <div className="flex flex-wrap items-center -mx-4">
            <div className="w-auto px-4 mb-4 text-center ">
                <a className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 xl:mb-0 hover:bg-blue-700 lg:inline-block text-gray-50"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="w-4 h-4 bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                        </path>
                    </svg>
                </a>
            </div>
            <div className="w-full px-4 lg:w-2/5">
                <div className=" lg:max-w-xl">
                    <h1 className="mb-6 text-4xl font-bold dark:text-gray-300 lg:text-6xl">
                        <span className="text-black">Keep learning and </span>
                        <span className="text-blue-500"> Develop </span>
                        <span className="text-black">Skills</span>
                    </h1>
                    <p className="mb-6 leading-8 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.sit amet, consectetur adipiscing elit, sed do Ut
                        enim ad minim veniam
                    </p>
                    <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-blue-600 rounded shadow dark:bg-blue-500 dark:hover:bg-blue-700 md:w-auto md:mb-0 md:mr-4 hover:bg-blue-700"
                        href="#">
                        Go Quiz Topic
                    </a>
                </div>
            </div>
            <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                <div className="flex justify-center lg:justify-end">
                    <div className="mr-4 lg:mr-8">
                        <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                            src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png" alt=""/>
                        <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/273257854/original/acb1aba0e1266eec63199d1a02f3f675ed5e6ac3/do-python-projects-and-programming-for-you.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                            src="https://assets.thehansindia.com/h-upload/2022/07/09/1302112-skill-development.webp" alt=""/>
                        <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                            src="https://d2mk45aasx86xg.cloudfront.net/Best_React_Native_tools_206b76b4b7.webp" alt=""/>
                    </div>
                </div>
            </div>
            <div className="w-auto px-4 mb-4 text-center xl:mb-0">
                <a className="hidden p-2 bg-blue-600 rounded-full dark:bg-blue-500 hover:bg-blue-700 lg:inline-block text-gray-100"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

</section>
  );
};

export default Hero;