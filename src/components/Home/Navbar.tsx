import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="/" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-extrabold"> Quiz App </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link href='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">Quiz</Link>
            </li>
            <li className="flex">
              <Link href='/about' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">About Us</Link>
            </li>
            <li className="flex">
              <Link href='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-3xl">Blog</Link>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link href='/login'><button className="self-center px-8 py-3 font-semibold rounded dark:bg-blue-500 text-gray-100">Log in</button></Link>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;