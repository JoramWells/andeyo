import Head from "next/head";
import Link from "next/link";
import { UserCircleIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Andeyo</title>
        <meta name="description" content="Search EngineX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-md text-gray-700 bg-yellow-400">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">Andeyo</p>
          <p className="link">
            <Link href="/about">About</Link>
          </p>
        </div>
        <div>
          <form>
            <div className="flex w-full max-w-md rounded-full bg-yellow-200 items-center p-1">
              <SearchIcon className="h-5 text-gray-500 hover:cursor-pointer m-1" />

              <input
                placeholder="Search..."
                className="border-none focus:outline-none flex-grow bg-yellow-200 rounded-full p-1 text-sm text-gray-700"
              />
              <XIcon className="h-5 text-gray-500 m-1 hover:cursor-pointer" />
            </div>
          </form>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p>
            <Link href="/contact">Contact us</Link>
          </p>
          <p className="link">Login</p>
          <p className="link">Register</p>
          <UserCircleIcon className="h-5 rounded-full hover:bg-gray-200 text-gray-700 cursor-pointer" />
        </div>
      </header>

      <main>{/* Main */}</main>
    </div>
  );
}
