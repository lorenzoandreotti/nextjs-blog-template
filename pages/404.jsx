import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>404 | Next JS blog template</title>
        <meta
          name="description"
          content="Next JS blog template with tailwind CSS and Sanity CMS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-grow flex-col items-center justify-center space-y-4 px-4">
        <h1>404 - Page Not Found</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Custom404;
