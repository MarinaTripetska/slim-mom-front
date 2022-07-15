import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo_image.png';
import LogoText from '../../assets/images/logo_text.png';
import { Image, Text } from './Logo.styled';
//TODO should be link
const Logo = () => {
  return (
    <Link to="/">
      <Image src={LogoImage} alt="Logo" />
      <Text src={LogoText} alt="Logo" />
    </Link>
  );
};

export default Logo;
