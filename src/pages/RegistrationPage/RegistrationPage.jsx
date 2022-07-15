import Container from 'components/Container';
import RegistrationForm from 'components/RegistrationForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import Background from '../../components/Background';

const RegistrationPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Background>
      <Container>
        {isLoading && <Loader />}
        <RegistrationForm />
      </Container>
    </Background>
  );
};
export default RegistrationPage;
