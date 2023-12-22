import QuizTopic from "./QuizTopic";

const Quiz = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-14">Select your quiz topic</h1>
    <div className="grid grid-flow-col gap-10 mx-12">
      <QuizTopic/>
      <QuizTopic/>
      <QuizTopic/>
      <QuizTopic/>
    </div>
    </div>
  );
};

export default Quiz;