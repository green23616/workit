'use client'

import { SessionProvider } from "next-auth/react"

export default function PersonalLayout({children}){
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}