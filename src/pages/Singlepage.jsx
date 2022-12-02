import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  console.log(id);

  return (
    <>
      Single Page{' '}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </>
  );
};
