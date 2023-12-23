import QuizTopic from "./QuizTopic";

const Quiz = ({quizTopic}) => {
  
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-14">Select your quiz topic</h1>
    <div className="grid grid-flow-col gap-10 mx-12">
      {
        quizTopic?.map(quiz => <QuizTopic key={quiz.id} quiz={quiz}/>)
      }
    </div>
    </div>
  );
};

export default Quiz;