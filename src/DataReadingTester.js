import { userEffect, useState } from "react";

// type Post = {
//   title: String,
//   body: String,
// };

export default function BlogPostExample() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("some url")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(False);
      });
  }, []);
  return (
    <article>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1> {post.title}</h1>
        </>
      )}
    </article>
  );
}
