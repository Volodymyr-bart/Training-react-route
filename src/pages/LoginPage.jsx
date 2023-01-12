import { useLocation, useNavigate } from 'react-router-dom';

export const LoginPage = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  return (
    <>
      <h1>Login Page</h1>
      {fromPage}
    </>
  );
};
