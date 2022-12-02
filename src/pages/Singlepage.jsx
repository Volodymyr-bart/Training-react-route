import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SinglePage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  console.log(useParams());

  useEffect(() => {
    console.log(id);

    fetch(`https://jsonplaceholder.typicode.com/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [id]);

  return (
    <>
      Single Page{' '}
      {/* {posts && (
        <>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </>
      )} */}
    </>
  );
};
