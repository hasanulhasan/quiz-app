import React from 'react';

const Options = ({option}) => {
  return (
    <div>
      <button
        className="inline-block text-xl px-3 py-3 border-solid border-2 border-sky-700 font-bold m-3 rounded-lg hover:bg-gray-900 hover:text-white dark:bg-blue-400 dark:text-gray-900">{option}</button>
    </div >
  );
};

export default Options;