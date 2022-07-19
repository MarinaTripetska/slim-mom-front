// import { UserInfoMenuMobile } from '../UserInfoMenu';
import { MainPageMobSidebarWrap } from './MainPageMobSidebarStyle';
import IconBack from '../../assets/images/arrow-mobile.png';


export default function MainPageMobSidebar() {
  return (
    <MainPageMobSidebarWrap>
      <BackButton onClick={() => navigate(-1)}>
        <img src={IconBack} alt="IconBack" width={12} height={7} />
      </BackButton>
    </MainPageMobSidebarWrap>
  );
}
