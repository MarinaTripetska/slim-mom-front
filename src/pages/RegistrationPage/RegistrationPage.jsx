import { useSelector } from 'react-redux';

import Container from 'components/MainContainer';
import RegistrationForm from 'components/RegistrationForm';
import Loader from 'components/Loader';
import { authSelectors } from 'redux/app/auth';
import Background from '../../components/Background';
import Header from '../../components/Header';

const RegistrationPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Background>
      <Header localPage="RegistrationPage" />

      <Container>
        {isLoading && <Loader />}
        <RegistrationForm />
      </Container>
    </Background>
  );
};
export default RegistrationPage;
