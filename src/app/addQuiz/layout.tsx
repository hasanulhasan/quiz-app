'use client'
import Navbar from "@/components/Home/Navbar"
import { Metadata } from "next"
import { useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { setLoading, setUser } from '@/redux/features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/Auth/Firebase'
const metadata: Metadata = {
  title: 'Add Quiz',
  description: 'Add Quiz',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }
    });
  },[dispatch])
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  )
}