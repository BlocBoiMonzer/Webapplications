import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch('/api/posts/${router.query.id}.json');
      const post = await response.json();
      setPost(post);      
    }
    
    fetchPost();
  } , [router.query.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content} </p>
    </div>
  );
};

export default PostPage