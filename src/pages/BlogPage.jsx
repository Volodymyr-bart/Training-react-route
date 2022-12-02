import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  // const {  } = useParams();
  console.log(useParams());

  return (
    <>
      <h1>Our news</h1>
      {posts.map(post => (
        <Link key={post.id} to={`${post.id}`}>
          {/* <span>{post.id}</span> */}
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  );
};
