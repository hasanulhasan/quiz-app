/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const QuizTopic = () => {
  return (
    <div className='mx-auto'>
      <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Topic Name</h2>
            <p className="dark:text-gray-100">Total quiz: 10</p>
          </div>
          <Link href='/quiz'><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-500 dark:text-gray-900"
          >Go to quiz</button></Link>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;