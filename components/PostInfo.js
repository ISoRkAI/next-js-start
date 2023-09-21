import Heading from "@/components/Heading";

export default function PostInfo({ post }) {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty Contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <div>{body}</div>
    </>
  );
}
