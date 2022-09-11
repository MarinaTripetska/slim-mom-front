import { Link } from 'react-router-dom';

import LogoImage from 'assets/images/logo_image.png';
import LogoText from 'assets/images/logo_text.png';

import { Image, Text, LogoStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled>
        <Image src={LogoImage} alt="Logo" />
        <Text src={LogoText} alt="Logo" />
      </LogoStyled>
    </Link>
  );
};
