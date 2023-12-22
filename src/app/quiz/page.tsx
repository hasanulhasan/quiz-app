import Options from "@/components/Options/Options";

const Quiz = () => {
  return (
    <div>
      <div className="max-w-3xl px-6 py-10 mx-auto space-y-12 border-solid border-2 my-4 shadow-lg">
        <article className="space-y-8 rounded-lg dark:bg-gray-800 dark:text-gray-100">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:tracking-tight md:text-3xl p-4">What is JavaScript?</h1>
          </div>
        </article>

        <div>
          <div className="flex flex-wrap py-6 border-t border-dashed dark:border-gray-400">
            <Options/>
            <Options/>
            <Options/>
            <Options/>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-6 py-8 mx-auto space-y-8 border-solid border-2 my-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 ">
          <button
              className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto">
              Back
          </button>
          <button
              className="w-full px-6 py-3 text-gray-100 bg-blue-500 rounded-md md:w-auto">
              Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;