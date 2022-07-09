// import { Link } from 'react-router-dom';
//import { ReactComponent as LogoImage } from '../../icons/logo_desktop';
import LogoImage from '../../assets/images/logo_image.png';
import LogoText from '../../assets/images/logo_text.png';
import { Image, Text } from './Logo.styled';

const Logo = ({ isLogged = false }) => {
  return (
    <div>
      <Image src={LogoImage} alt="Logo" />
      <Text src={LogoText} alt="Logo" />
    </div>
  );
};

export default Logo;
