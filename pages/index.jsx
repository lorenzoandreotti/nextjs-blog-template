import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllPosts } from "../lib/query";
import { sanityClient } from "../lib/sanity.server";

export default function Home({ posts }) {
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
        <h1 className="text-5xl font-bold text-green-500">Blog example</h1>
        <ul className="ml-8 list-disc">
          {posts?.map((post) => (
            <li key={post?._id}>
              <Link href={"/posts/" + post?.slug}>
                <a>
                  <p>{post?.title}</p>
                  <span className="text-sm italic text-gray-500">
                    {new Date(post?.publishedAt).toLocaleDateString("it-IT")}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = getAllPosts;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
