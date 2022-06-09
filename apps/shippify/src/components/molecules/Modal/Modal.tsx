import { IModal } from '@core/interfaces';
import Box from '@mui/material/Box';
import ModalMUI from '@mui/material/Modal';
import { style } from './modal.style';

const Modal: React.FC<IModal> = ({ children, open, onClose }) => {
  return (
    <ModalMUI
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </ModalMUI>
  );
};

export default Modal;
