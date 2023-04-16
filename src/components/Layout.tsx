import { Courier_Prime } from 'next/font/google'
import Head from 'next/head'

import { PropsWithChildren } from 'react'

import { Footer, Navbar } from '@/components'

import layout from '@/styles/layout.module.scss'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${courierPrime.className} ${layout.content}`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
