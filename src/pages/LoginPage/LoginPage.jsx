import Container from 'components/Container';
import LoginForm from 'components/LoginForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import Back from '../../components/Background';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <>
      <Back>
        <Container>
          {isLoading && <Loader />}
          <LoginForm />
        </Container>
      </Back>
    </>
  );
};
export default LoginPage;
