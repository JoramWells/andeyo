import Head from "next/head";
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
      <main></main>
    </div>
  );
}
