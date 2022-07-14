import Container from 'components/Container';
import RegistrationForm from 'components/RegistrationForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';

const RegistrationPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      <RegistrationForm />
    </Container>
  );
};
export default RegistrationPage;
