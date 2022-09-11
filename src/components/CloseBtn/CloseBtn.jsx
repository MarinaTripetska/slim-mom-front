import { Btn } from './CloseBtn.styled';
import { MdOutlineClose } from 'react-icons/md';

const CloseBtn = ({ onHandleClick, position }) => {
  return (
    <Btn onClick={onHandleClick} position={position}>
      <MdOutlineClose size={20} />
    </Btn>
  );
};

export default CloseBtn;
