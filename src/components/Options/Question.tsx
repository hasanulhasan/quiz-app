import Options from "./Options";

const Question = ({activeQuestion}) => {
  const {options, question, correctAnswer} = activeQuestion;
  console.log(activeQuestion);
  return (
    <div className="max-w-3xl px-6 py-10 mx-auto space-y-12 border-solid border-2 my-6 shadow-lg">
        <article className="space-y-8 rounded-lg dark:bg-gray-800 dark:text-gray-100">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:tracking-tight md:text-3xl p-4">{question}</h1>
          </div>
        </article>

        <div>
          <div className="flex flex-wrap py-6 border-t border-dashed dark:border-gray-400">
            {
              options?.map(option=> <Options option={option}/>)
            }
          </div>
        </div>
      </div>
  );
};

export default Question;