'use client'
import { useGetScoresQuery } from '@/redux/features/apiSlice';
import React from 'react';
import Loading from '../loading';

const MyScore = () => {
  const {data, isLoading} = useGetScoresQuery(null);
  const allScore = data?.data
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
                                <th className="px-6 pb-3 font-extrabold">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            allScore?.map((score,i)=> <tr key={i} className="text-md text-black">
                            <td className="px-6 py-5 font-medium">{score.topic}</td>
                            <td className="px-6 py-5 font-medium ">{score.score}</td>
                            </tr>)
                          }
                        </tbody>
                    </table>
                    </>
                  }
                </div>
            </div>
        </div>
    </section>
  );
};

export default MyScore;