'use client'
import { useGetSingleQuizQuery } from "@/redux/features/apiSlice";
import { useParams } from "next/navigation";
import QuizDetails from '@/components/Home/QuizDetails';
import Loading from "../loading";
import { useAppDispatch } from "@/redux/hooks";
import { zeroScore } from "@/redux/features/scoreSlice";

const Quiz = () => {
  const { id } = useParams();
  const {data, isLoading, isError} = useGetSingleQuizQuery(id);
  const quizzes = data?.data
  const dispatch = useAppDispatch();

  let content = null;
  if (isLoading) content = <Loading/>
  if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  if (!isLoading && !isError && quizzes) {
    content = <QuizDetails key={quizzes._id} quizzes={quizzes}/>
    dispatch(zeroScore())
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-6">Quiz Topic on {quizzes?.name}</h1>
      {
        content
      }
    </div>
  );
};

export default Quiz;