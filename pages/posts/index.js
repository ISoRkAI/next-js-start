import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
};

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
