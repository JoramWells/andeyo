import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
// const search = require('./search.svg')
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
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
            <h1
              style={{ fontSize: "2.5rem" }}
              className="text-3xl font-extrabold text-gray-900 p-5"
            >
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
            <div>
              <h1
                style={{ fontSize: "2.5rem" }}
                className="text-3xl font-extrabold text-gray-900 p-5"
              >
                The flexible AI-powered <br /> Search & Discovery <br />{" "}
                Platform
              </h1>
              <p className="text-gray-700 p-5" style={{ fontSize: "1.5rem" }}>
                Create cutting-edge UX for <br /> web, apps & ecommerce
              </p>
              <div className="space-x-4 mt-2 text-gray-700 p-5">
                <button className="btn">Start for free</button>
                <button className="btn">Request Demo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-around items-center ml-auto mr-auto max-w-6xl" style={{height:"300px"}}>
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Developers</h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Ecommerce</h2>
            <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem" }}>Media</h2>
            <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis
            </p>
          </div>
        </div>
        <div
          style={{ height: "400px" }}
          className="bg-yellow-200 h-200 p-3 flex flex-row items-center"
        >
          <div style={{margin:"auto", display:"block"}}>
          <h1
                style={{ fontSize: "2rem" }}
                className="text-center text-3xl font-extrabold text-gray-900"
              >
                <b>Deliver what your customers want every time</b>{" "}
              </h1>
              <p className="text-center text-gray-600 md:max-w-3xl">
                Algolia’s search-as-a-service and full suite of APIs allow teams
                to easily develop tailored, fast Search & Discovery experiences
                that delight and convert.
              </p>
          </div>


        </div>
      </main>
      <Footer />
    </>
  );
}
