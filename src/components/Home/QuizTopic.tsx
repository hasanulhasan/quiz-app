/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";

const QuizTopic = ({quiz}) => {
  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/${id}`)
  }
  // console.log(quiz)
  return (
    <div className='mx-auto'>
      <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src={quiz.logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{quiz.name}</h2>
            <p className="dark:text-gray-100">Total quiz: {quiz.total}</p>
          </div>
          <button onClick={()=> handleRoute(quiz.id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-500 dark:text-gray-900"
          >Go to quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;