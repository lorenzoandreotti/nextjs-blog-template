import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>About | Next JS blog template</title>
        <meta
          name="description"
          content="Next JS blog template with tailwind CSS and Sanity CMS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-grow flex-col items-center justify-center">
        <h1>About</h1>
      </main>

      <Footer />
    </div>
  );
}
