import Head from "next/head";
import Image from "next/image";
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
        <div
          className="p-5 flex flex-row space-x-4 "
          style={{ height: "500px" }}
        >
          <div>
            <h1 style={{ fontSize: "2.5rem" }} className="text-3xl font-extrabold text-gray-900 p-5">
              The flexible AI-powered <br /> Search & Discovery <br /> Platform
            </h1>
            <p className="text-gray-700 p-5" style={{ fontSize: "1.5rem" }}>
              Create cutting-edge UX for <br /> web, apps & ecommerce
            </p>
            <div className="space-x-4 mt-2 text-gray-700 p-5">
              <button className="btn">Start for free</button>
              <button className="btn">Request Demo</button>
            </div>
          </div>

          <div>
            {/* <Image src={search} height={200} width={200} alt="computer" /> */}
            imf
          </div>
        </div>
        <div className="flex p-2 justify-around">
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Developers</h2>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Ecommerce</h2>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Media</h2>
          </div>
        </div>
        <div style={{ height: "400px" }} className="bg-yellow-200 h-200 p-3 items-center">
          <div className="flex flex-col justify-center md:max-w-xl" style={{margin:"auto", display:"block"}}>
            <div>
            <h1
              style={{ fontSize: "2rem" }}
              className="text-center text-3xl font-extrabold text-gray-900"
            >
              <b>Deliver what your customers want every time</b>{" "}
            </h1>
            <p className="text-center text-gray-600">
              Algolia’s search-as-a-service and full suite of APIs allow teams
              to easily develop tailored, fast Search & Discovery experiences
              that delight and convert.
            </p>
            <div className="flex justify-around p-2">
              <div>
                <p>Trusted</p>
                +300
              </div>
              <div>
                <p>Serving</p>
                4B
              </div>
              
              
            </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
