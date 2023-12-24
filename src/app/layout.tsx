'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/Providers'
import { useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { setLoading, setUser } from '@/redux/features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/Auth/Firebase'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'The Quiz App',
//   description: 'This is a quiz management app',
// }

export default function RootLayout({children }: {children: React.ReactNode }) {

  // const dispatch = useAppDispatch();
  //   useEffect(()=> {
  //     dispatch(setLoading(true))
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         dispatch(setUser(user.email));
  //         dispatch(setLoading(false))
  //       } else {
  //         dispatch(setLoading(false))
  //       }
  //     });
  //   },[dispatch])

  return (
    <Providers>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}
