'use client'
import Quiz from '@/components/Home/Quiz';
import { useGetQuizQuery } from '@/redux/features/apiSlice';
import Loading from '../loading';

const QuizTopic = () => {
  const {data, isLoading} = useGetQuizQuery(null);
  const quizTopic = data?.data

  return (
    <div>
      {
        isLoading? <> <Loading/> </> :  <> <Quiz quizTopic={quizTopic}/> </>
      }
    </div>
  );
};

export default QuizTopic;