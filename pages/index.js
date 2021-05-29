import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <head>
        <Head>
          <title>Home | Andeyo</title>
          <meta name="description" content="Search EngineX" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
      </head>

      {/* Include Navbar */}

      <Navigation />
      <main>
        <div
          className="relative pt-5 content-center items-center flex justify-around space-x-4 "
          style={{ minHeight: "75vh" }}
        >
          <div>
            <h1 className="text-3xl leading-normal font-extrabold text-gray-900 p-5">
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

          <div className="container relative mx-auto">
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
        </div>
        <div
          className="flex p-2 container justify-around items-center ml-auto mr-auto max-w-6xl"
          style={{ height: "50vh" }}
        >
          <div className="flex flex-wrap">
            {/* 1 */}
            <div className="lg:pt-12 w-full md:w-4/12 px-4">
              <div className="relative p-5 min-w-0 break-words rounded-lg w-full shadow-lg bg-white">
                <div className="px-4 py-5 flex-auto">
                  <div className="p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl mt-4 font-semibold">Awarded Agency</h6>
                  <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="lg:pt-12 w-full md:w-4/12 px-4">
              <div className="relative p-5 min-w-0 break-words rounded-lg w-full shadow-lg bg-white">
                <div className="px-4 py-5 flex-auto">
                  <div className="p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl mt-4 font-semibold">Awarded Agency</h6>
                  <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="lg:pt-12 w-full md:w-4/12 px-4">
              <div className="relative p-5 min-w-0 break-words rounded-lg w-full shadow-lg bg-white">
                <div className="px-4 py-5 flex-auto">
                  <div className="p-3 inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl mt-4 font-semibold">Awarded Agency</h6>
                  <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "400px" }}
          className="bg-yellow-200 h-200 p-3 flex flex-row items-center"
        >
          <div style={{ margin: "auto", display: "block" }}>
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
