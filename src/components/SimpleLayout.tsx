'use client'
import { Container } from '@/components/Container'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Container className="mt-16 sm:mt-32" data-aos="fade-right">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && (
        <div className="mt-16 sm:mt-20" data-aos="fade-right">
          {children}
        </div>
      )}
    </Container>
  )
}
