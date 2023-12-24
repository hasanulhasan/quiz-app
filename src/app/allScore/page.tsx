'use client'
import { useDeleteScoreMutation, useGetScoresQuery } from '@/redux/features/apiSlice';
import Loading from '../loading';
import IScore from '@/Types';
import toast, { Toaster } from 'react-hot-toast';

const MyScore = () => {
  const {data, isLoading} = useGetScoresQuery(null);
  const allScore: IScore[] = data?.data
  const [deleteScore] = useDeleteScoreMutation();
  const handleDelete = (id: number) => {
    deleteScore(id)
    toast.success('Quiz Record Deleted')
  }

  return (
      <section className="items-center lg:flex mt-6 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 rounded shadow bg-white dark:bg-gray-200">
                <div className="flex px-6 pb-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-bold dark:text-gray-400">All Score</h2>
                </div>
                <div className="p-4 overflow-x-auto">
                  {
                    isLoading? <><Loading/></> : 
                    <>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-md text-left text-black">
                                <th className="px-6 pb-3 font-extrabold">Topic</th>
                                <th className="px-6 pb-3 font-extrabold">User Email</th>
                                <th className="px-6 pb-3 font-extrabold text-center">Score</th>
                                <th className="px-6 pb-3 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            allScore?.map((score,i)=> <tr key={i} className="text-md text-black">
                            <td className="px-6 py-5 font-medium">{score.topic}</td>
                            <td className="px-6 py-5 font-medium">{score.userEmail}</td>
                            <td className="px-6 py-5 font-medium text-center">{score.score}</td>
                            <td className="px-6 py-5 text-center">
                              <a href="#"
                                  className="px-4 py-2 font-medium text-black border border-blue-500 rounded-md  dark:border-blue-300 dark:hover:bg-blue-300 dark:hover:text-gray-700 hover:bg-blue-500">Edit
                              </a>
                              <button onClick={()=> handleDelete(score?.id!)}
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

export default MyScore;