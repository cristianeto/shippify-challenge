import { useState } from 'react';

import Form from './Form';
import { HeaderText } from './VehicleForm.style';
import { IVehicleForm } from '@core/interfaces';
import { Modal } from '@molecules/*';
import { vehicleForm } from '@constants';

const initialState = {
  plateId: '',
  model: '',
  type: '',
  capacity: '',
  creationDate: '',
  id: '',
  driverId: '',
};

const VehicleForm: React.FC<IVehicleForm> = ({ open, onClose, type }) => {
  const [defaultForm, setDefaultForm] = useState(initialState);
  const { titles, labels } = vehicleForm;

  const formProps = {
    defaultForm: initialState,
    labels,
    titles,
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <HeaderText>
          {type === titles.newRegister
            ? titles.newRegister
            : titles.updateRegister}
        </HeaderText>
        <Form {...formProps} />
      </Modal>
    </div>
  );
};

export default VehicleForm;
