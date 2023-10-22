import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';

const PostPage = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const postJson = await fs.promises.readFile(`/public/posts/${router.query.id}.json`, 'utf8');
      const post = JSON.parse(postJson);
      setPost(post);
    }

    fetchPost();
  }, [router.query.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
