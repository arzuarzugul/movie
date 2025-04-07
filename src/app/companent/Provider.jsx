"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Provider = ({children}) => {
  return (
    <div>
      <ThemeProvider attribute="class" >
      {children}
    </ThemeProvider>
    </div>
  )
}

export default Provider
