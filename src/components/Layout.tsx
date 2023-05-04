import { Courier_Prime } from 'next/font/google'
import Head from 'next/head'

import { PropsWithChildren, useEffect, useState } from 'react'

import { Footer, Mouselight, Navbar } from '@/components'
import { isSafari } from 'react-device-detect'

import layout from '@/styles/layout.module.scss'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export function Layout({ children }: PropsWithChildren) {
  const [mouseLight, setMouseLight] = useState<JSX.Element | null>(null)

  useEffect(() => {
    if (!isSafari) {
      setMouseLight(<Mouselight />)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="7a25zmozsn29_Xie0xfVx-inNXz4KZOjvTO2C-FJ0iM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.content} style={courierPrime.style}>
        <Navbar />
        {children}
        <Footer />
      </div>
      {mouseLight}
    </>
  )
}
