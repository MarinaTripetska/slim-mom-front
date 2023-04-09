import { ReactPortal } from 'components/ReactPortal';
import { UserAvatarsModal } from 'components/UserAvatarsModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from 'redux/app/auth';

export const UserMenu = () => {
  const navigate = useNavigate();

  const userAvatar = useSelector(authSelectors.getUserAvatar);
  const [isOpenAvatarModal, setIsOpenAvatarModal] = useState(false);

  return (
    <div height={300}>
      <button onClick={() => navigate(-1)}>X</button>
      <h1>User Menu</h1>
      <button onClick={() => setIsOpenAvatarModal(true)}>
        <img src={userAvatar} alt="" />
      </button>
      <p>Change Name</p>
      <p>Change email</p>
      <p>Change password</p>
      <p>Change lang</p>
      <p>change theme</p>
      {isOpenAvatarModal && (
        <ReactPortal wrapperId="user-avatars">
          <UserAvatarsModal />
        </ReactPortal>
      )}
    </div>
  );
};
