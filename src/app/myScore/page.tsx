'use client'
import { useGetScoresQuery } from '@/redux/features/apiSlice';
import Loading from '../loading';
import IScore from '@/Types';
import { useAppSelector } from '@/redux/hooks';

const MyScore = () => {
  const {data, isLoading} = useGetScoresQuery(null);
  const allScore: IScore[] = data?.data
  const {user: currentUser} = useAppSelector(state => state.user)
  return (
      <section className="items-center lg:flex mt-6 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 rounded shadow bg-gray-200">
                <div className="flex px-6 pb-4 border-b border-gray-700">
                    <h2 className="text-xl font-bold text-gray-600">My Scores</h2>
                </div>
                <div className="p-4 overflow-x-auto">
                  {
                    isLoading? <><Loading/></> : 
                    <>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="text-md text-left text-black">
                                <th className="px-6 pb-3 font-extrabold">Topic</th>
                                <th className="px-6 pb-3 font-extrabold text-center">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            allScore?.filter(user => user.userEmail === currentUser.email).map((score,i)=> <tr key={i} className="text-md text-black">
                            <td className="px-6 py-5 font-medium">{score.topic}</td>
                            <td className="px-6 py-5 font-medium text-center">{score.score}</td>
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