import { IModal } from '@core/interfaces';
import Box from '@mui/material/Box';
import ModalMUI from '@mui/material/Modal';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
