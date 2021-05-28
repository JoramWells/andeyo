import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home | Andeyo</title>
        <meta name="description" content="Search EngineX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p>Andeyo</p>
          <p>About</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p>Login</p>
          <p>Register</p>
        </div>
      </header>

      <main >
        {/* Main */}
      </main>

 
    </div>
  )
}
