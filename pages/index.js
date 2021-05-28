import Head from "next/head";
import Image from 'next/image'
// const search = require('./search.svg')
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Andeyo</title>
        <meta name="description" content="Search EngineX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <div className="p-5 flex flex-row space-x-4  items-center">
          <div className="">
            <h1  style={{ fontSize: "2.5rem" }}>
              The flexible AI-powered <br/> Search & Discovery <br/> Platform
            </h1>
            <p className="text-gray-700" style={{fontSize:"1.5rem"}}>
            Create cutting-edge UX for <br/> web,
            apps & ecommerce
            </p>
            <div className="space-x-4 mt-2 text-gray-700">
              <button className="btn">Start for free</button>
              <button className="btn">Request Demo</button>
            </div>
          </div>

          <div>
            {/* <Image src={search} height={200} width={200} alt="computer" /> */}
            imf
            
          </div>
        </div>
      </main>
    </div>
  );
}
