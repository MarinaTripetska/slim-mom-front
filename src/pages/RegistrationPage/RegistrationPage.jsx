// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/app/auth';

import {
  Background,
  Header,
  MainContainer,
  RegistrationForm,
} from 'components';

const RegistrationPage = () => {
  // const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Background>
      <Header localPage="RegistrationPage" />

      <MainContainer>
        {/* {isLoading && <Loader />} */}
        <RegistrationForm />
      </MainContainer>
    </Background>
  );
};
export default RegistrationPage;
