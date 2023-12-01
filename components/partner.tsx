'use client'

import { useState, useRef, useEffect } from 'react'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-12 md:pt-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">Previous Partner</h1>
          <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>

        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-6">
      </div>
      </section>

  )
