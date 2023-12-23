import Footer from "@/components/Home/Footer"
import Navbar from "@/components/Home/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Quiz Topic',
  description: 'Quiz Topic',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}