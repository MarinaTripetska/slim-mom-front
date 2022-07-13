import Container from 'components/Container';
import LoginForm from 'components/LoginForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      <LoginForm />
    </Container>
  );
};
export default LoginPage;
