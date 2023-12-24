/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import IQuiz from '@/Types';
const Quiz = ({quizTopic}:{quizTopic: IQuiz[]}) => {

  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/${id}`)
  }

  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-14">Select your quiz topic</h1>
    <div className="grid grid-flow-col gap-14 mx-12">
      {
        quizTopic?.map(quiz => <div key={quiz.id}>
          <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={quiz.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{quiz.name}</h2>
              </div>
              <button onClick={()=> handleRoute(quiz.id!)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-500 dark:text-gray-900"
              >Go to quiz</button>
            </div>
          </div>
        </div>)
      }
    </div>
    </div>
  );
};

export default Quiz;