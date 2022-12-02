import { useParams } from 'react-router-dom';
export const EditPost = () => {
  const { id } = useParams();
  return <>Edit {id} post </>;
};
