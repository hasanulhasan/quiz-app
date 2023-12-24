'use client'
import { useDeleteQuestionMutation, useGetQuestionsQuery } from '@/redux/features/apiSlice';
import React from 'react';
import Loading from '../loading';
import toast, { Toaster } from 'react-hot-toast';

const ManageQuestion = () => {
  const {data,isLoading} = useGetQuestionsQuery(null);
  const allQuestions = data?.data
  const [deleteQuestion] = useDeleteQuestionMutation()
  const handleDelete = (id: number) => {
    deleteQuestion(id)
    toast.success('Question Deleted')
  }
  return (
    <section className="items-center lg:flex bg-gray-50">
    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="pt-4 bg-gray-100 rounded shadow">
            <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold dark:text-gray-400">All Question</h2>
            </div>
            <div className="p-4 overflow-x-auto">
              {
                isLoading? 
                <>
                <Loading/>
                </> : 
                <>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-md text-left text-black">
                            <th className="px-6 pb-3 font-medium">Question</th>
                            <th className="px-6 pb-3 font-medium ">Topic Name</th>
                            <th className="px-6 pb-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          allQuestions?.map(question=> <tr key={question.id} className="text-xs bg-gray-100 text-black">
                          <td className="px-6 py-5 font-medium">{question.question}</td>
                          <td className="px-6 py-5 font-medium ">{question.topic.name}</td>
                          <td className="px-6 py-5 text-center">
                              <a href="#"
                                  className="px-4 py-2 font-medium text-black border border-blue-500 rounded-md  dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:bg-blue-500">Edit
                              </a>
                              <button onClick={()=> handleDelete(question.id)}
                                  className="px-4 ml-2 py-2 font-medium border border-red-500 rounded-md  text-black hover:bg-red-500">Delete
                              </button>
                          </td>
                      </tr>)
                        }
                    </tbody>
                </table>
                </>
              }
                
            </div>
        </div>
    </div>
    <Toaster
        position="top-right"
        reverseOrder={false}
      />
</section>
  );
};

export default ManageQuestion;