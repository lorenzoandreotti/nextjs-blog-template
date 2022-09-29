import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getAllPostsSlug, getPostBySlug } from "../../utils/query";
import { sanityClient } from "../../lib/sanity.server";
import { urlFor } from "../../lib/sanity";

const postComponents = {
  types: {
    image: ({ value }) => (
      <img
        className="mx-auto my-8 max-h-screen rounded-lg"
        alt={value.alt || " "}
        src={urlFor(value)}
      />
    ),
  },
};

const Post = ({ post }) => {
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
        <h1 className="text-5xl font-bold text-primary">{post?.title}</h1>
        <span className="text-sm italic text-secondary">
          {new Date(post?.publishedAt).toLocaleDateString("it-IT")}
        </span>
        <article className="prose mx-auto">
          <div>
            <PortableText value={post?.body} components={postComponents} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Post;

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
