import Head from "next/head";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";

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
            <input
              placeholder="Search..."
              className="border-none focus:border-none"
            />
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
