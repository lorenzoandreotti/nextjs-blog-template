import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllPosts } from "../utils/query";
import { sanityClient } from "../lib/sanity.server";
import Card from "../components/Card";

const Home = ({ posts }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Next JS blog template</title>
        <meta
          name="description"
          content="Next JS blog template with tailwind CSS and Sanity CMS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-grow flex-col space-y-4 px-4">
        <h1 className="text-5xl font-bold text-primary">Blog example</h1>
        <div className="mt-4 grid grid-flow-row grid-cols-1 gap-2">
          {posts?.map((post) => (
            <Card
              key={post?._id}
              href={"/posts/" + post?.slug}
              title={post?.title}
              date={new Date(post?.publishedAt).toLocaleDateString("it-IT")}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = getAllPosts;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
