import BurgerMenuIcon from 'assets/images/burger.png';
import CloseMenuIcon from 'assets/images/close.png';
import { Button } from './Burger.styled';

export const Burger = ({ handleOpenMenu, isOpenMenu }) => {
  return (
    <>
      {isOpenMenu && (
        <Button type="button" onClick={() => handleOpenMenu(false)}>
          <img src={CloseMenuIcon} alt="CloseMenuIcon" />
        </Button>
      )}
      {!isOpenMenu && (
        <Button type="button" onClick={() => handleOpenMenu(true)}>
          <img src={BurgerMenuIcon} alt="BurgerMenuIcon" />
        </Button>
      )}
    </>
  );
};
