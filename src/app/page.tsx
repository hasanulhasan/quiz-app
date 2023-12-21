'use client'
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import { useGetQuizQuery } from "@/redux/features/apiSlice"

export default function Home() {
  // const {data} = useGetQuizQuery(null);
  // console.log(data)
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}
