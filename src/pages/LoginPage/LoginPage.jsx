import { Background, Header, LoginForm, MainContainer } from 'components';
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/app/auth';

const LoginPage = () => {
  // const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <>
      <Background>
        <Header localPage="LoginPage" />
        <MainContainer>
          {/* {isLoading && <Loader />} */}
          <LoginForm />
        </MainContainer>
      </Background>
    </>
  );
};
export default LoginPage;
