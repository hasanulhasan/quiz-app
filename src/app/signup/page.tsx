const Login = () => {
  return (
    <section className=" font-poppins">
    <div className="max-w-6xl px-0 mx-auto lg:px-6">
        <div className="flex flex-col items-center h-full md:flex-row">
            <div
                className="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                <div className="z-10 w-full p-10 bg-gray-100 h-100">
                    <h2 className="text-xl font-bold leading-tight mb-7 md:text-3xl text-black">
                        Register to your account</h2>
                    <form action="" className="mt-6">
                        <div>
                            <label htmlFor="" className="block text-black">Email:</label>
                            <input type="email"
                                className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 border border-gray-800"
                                name="" placeholder="Enter your email"/>
                        </div>
                        <div className="mt-5">
                            <div>
                                <label htmlFor="" className="text-black">Password:</label>
                                <div className="relative flex items-center mt-2">
                                    <input type="password"
                                        className="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-400 dark:text-gray-100 border border-gray-800"
                                        name="" placeholder="Enter password"/>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full px-4 py-3 mt-6 font-semibold text-gray-100 bg-blue-500 rounded-l hover:bg-blue-600 "
                            type="submit">REGISTER</button>
                        <p className="mt-6 text-black"> Already have an account?
                            <a href="#" className="font-semibold text-blue-500 hover:text-blue-700"> Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Login;