import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'

export default function About() {
    return (
        <div>
            <Head>
                <title>
                  About | Andeyo  
                </title>
            </Head>
            <Navigation />
            <main>
                {/* <NavBar /> */}
            </main>
        </div>
    )
}
