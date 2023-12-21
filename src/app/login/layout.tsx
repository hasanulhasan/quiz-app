import Navbar from "@/components/Home/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login here',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  )
}