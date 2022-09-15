import { Background, Header, LoginForm, MainContainer } from 'components';

const LoginPage = () => {
  return (
    <Background>
      <Header localPage="LoginPage" />

      <LoginForm />
    </Background>
  );
};
export default LoginPage;
