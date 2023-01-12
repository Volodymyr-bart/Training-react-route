import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  const goBack = () => navigate(-1);
  // const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <>
      {/* <button onClick={goHome}>Go Home</button> */}
      <button onClick={goBack}>Go back</button>
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
