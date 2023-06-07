'use client'

import { AppContextProvider } from '@/context'

import { UserRepository } from '@/api'

import './globals.css'

const userRepository = new UserRepository()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider userRepository={userRepository}>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
