import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAllPostsSlug, getPostBySlug } from "../../lib/query";
import { sanityClient } from "../../lib/sanity.server";

const Posts = ({ post }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Post | Next JS blog template</title>
        <meta
          name="description"
          content="Next JS blog template with tailwind CSS and Sanity CMS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-grow flex-col space-y-4 px-4">
        <article>
          <h1 className="text-5xl font-bold text-green-500">{post?.title}</h1>
          <span className="text-sm italic text-gray-500">
            {new Date(post?.publishedAt).toLocaleDateString("it-IT")}
          </span>
          <div>
            <PortableText value={post?.body} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;

export const getStaticPaths = async () => {
  const query = getAllPostsSlug;

  const posts = await sanityClient.fetch(query);

  const paths = posts?.map((post) => ({
    params: { slug: post?.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = getPostBySlug;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    // revalidate: 60 * 60,
    revalidate: 1,
  };
};
