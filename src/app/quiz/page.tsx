'use client'
import Quiz from '@/components/Home/Quiz';
import { useGetQuizQuery } from '@/redux/features/apiSlice';

const QuizTopic = () => {
  const {data} = useGetQuizQuery(null);
  const quizTopic = data?.data
  return (
    <div>
      <Quiz quizTopic={quizTopic}/>
    </div>
  );
};

export default QuizTopic;