import {UserInfoMenuMobile} from '../UserInfoMenu';

import { MobileSidebarWrap} from './MobileSidebarStyle';

export default function MobileSidebar({ mobileAddSelected }) {
  return (
    <MobileSidebarWrap>
    {mobileAddSelected === 'hideOnMobile' }
      <div>
      <UserInfoMenuMobile />
      </div>
    </MobileSidebarWrap>
  );
}