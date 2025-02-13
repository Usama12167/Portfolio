import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    default: 'Usama Shahzad',
    template: 'Usama Shahzad - Software Engineer',
    absolute: 'Usama Shahzad - Software Engineer',
  },
  verification: {
    google: 'v17_mLrUxusKxX9glYv90NCPkZVDn6R4MPP8Vxdvo1U',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  keywords: [
    'react',
    'react  native',
    'nextjs',
    'reactjs',
    'mobile development',
    // 'nodejs',
    'android',
    'ios',
    'afzal',
    'Usama Shahzad',
    'Software Development',
    'Software Engineer',
    'Programming',
    'freelancer',
    'Usama Shahzad Portfolio',
    'fiverr',
    // 'upwork',
    'developer',
    // 'https://www.upwork.com/freelancers/ahtishams',
    'https://www.fiverr.com/afzal_116',
  ],
  creator: 'Usama Shahzad',
  publisher: 'Usama Shahzad',
  applicationName: 'Usama Shahzad',
  authors: [{ name: 'Usama Shahzad', url: process.env.NEXT_PUBLIC_SITE_URL }],
  generator: 'Usama Shahzad',

  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    title: 'Usama Shahzad - Software Engineer',
    description:
      'I am Usama Shahzad, Software Engineer with a solid 2-years journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

    siteName: 'Usama Shahzad',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.png`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.png`,
      },
    ],
    description:
      'I am Usama Shahzad, an Experienced Software Engineer with a solid 2-year journey dedicated to crafting high-performance, cross-platform mobile applications. My expertise lies in a robust understanding of JavaScript, Redux, React, Next.js, and React Native frameworks.',
    title: 'Usama Shahzad - Software Engineer',
  },
  icons: [
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.png` },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico`,
    },
  ],

  description:
    'I am Usama Shahzad, Software Engineer with a solid 2-year journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
