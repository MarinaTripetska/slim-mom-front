import Container from 'components/Container';
import LoginForm from 'components/LoginForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import Background from '../../components/Background';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <>
      <Background>
        <Container>
          {isLoading && <Loader />}
          <LoginForm />
        </Container>
      </Background>
    </>
  );
};
export default LoginPage;
