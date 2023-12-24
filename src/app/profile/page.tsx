/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetUsersQuery } from "@/redux/features/apiSlice";
import { useAppSelector } from "@/redux/hooks";
import IUser from '@/Types';
const Profile = () => {
  const {data} = useGetUsersQuery(null)
  const users: IUser[] = data?.data
  const {user: currentUser} = useAppSelector(state => state.user)

  return (
    <div className="flex justify-center mt-8">
      {
        users?.filter(user=> user.email === currentUser.email).map(user => <div key={user.id}>
          <img src={`https://ui-avatars.com/api/?name=${user?.name}&size=128&bold=true`} alt="image of user" className="rounded-lg mb-2"></img>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <h1 className="text-2xl font-bold">Email: {user?.email}</h1>
          <h1 className="text-2xl font-bold">Role: {user?.role}</h1>
          </div>)
      }
    </div>
  );
};

export default Profile;