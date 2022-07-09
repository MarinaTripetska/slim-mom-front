import { Link } from 'react-router-dom';
//import { ReactComponent as LogoImage } from '../../icons/logo_desktop';
import LogoImage from '../../icons/logo_image.svg';
import LogoText from '../../icons/logo_text.svg';
import { Image, Text } from './Logo.styled';

// import { ReactComponent as LogoText } from '../../assets/pictures/logo-text.svg';

const Logo = ({ isLogged = false }) => {
  return (
    <Link to="/">
      <Image src={LogoImage} alt="Logo" />
      <Text src={LogoText} alt="Logo" />
    </Link>
  );
};

export default Logo;
