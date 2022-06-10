import { Box, Button } from '@mui/material';

import { IDeleteModal } from '@core/interfaces';
import { Modal } from '@molecules/*';
import styled from '@emotion/styled';

const Message = styled.p`
  font-size: 1rem;
`;

const DeleteModal: React.FC<IDeleteModal> = ({
  option,
  open,
  onClose,
  onDelete,
}) => {
  const { id, capacity } = option;

  return (
    <Modal open={open} onClose={onClose}>
      <Message>
        Are you sure you want to <strong>delete</strong> this register?
      </Message>
      <p>{capacity}</p>
      <Box display="flex" width="100%" justifyContent="center" marginTop="1rem">
        <Button variant="contained" onClick={() => onDelete(id)}>
          Yes
        </Button>
        <Button onClick={onClose}>No</Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
