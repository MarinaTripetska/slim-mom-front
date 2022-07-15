import Container from 'components/Container';
import RegistrationForm from 'components/RegistrationForm';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import Back from '../../components/Background';

const RegistrationPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Back>
      <Container>
        {isLoading && <Loader />}
        <RegistrationForm />
      </Container>
    </Back>
  );
};
export default RegistrationPage;
