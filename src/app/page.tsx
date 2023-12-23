'use client'
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Quiz from "@/components/Home/Quiz";
import { useGetQuizQuery } from "@/redux/features/apiSlice"

export default function Home() {
  const {data} = useGetQuizQuery(null);
  const quizTopic = data?.data
  
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Quiz quizTopic={quizTopic}/>
      <Footer/>
    </main>
  )
}
