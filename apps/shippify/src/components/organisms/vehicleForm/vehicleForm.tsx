import Form from './Form';
import { HeaderText } from './VehicleForm.style';
import { IVehicleForm } from '@core/interfaces';
import { Modal } from '@molecules/*';
import { vehicleForm as vehicleTexts } from '@constants';
import { useVehicles } from '@hooks';

const VehicleForm: React.FC<IVehicleForm> = ({
  onSubmit,
  open,
  onClose,
  type,
  initialState,
}) => {
  const { titles, labels } = vehicleTexts;

  const formProps = {
    defaultForm: initialState,
    onSubmit,
    labels,
    titles,
  };

  const { create, updateRegister } = titles;

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <HeaderText>{type === create ? create : updateRegister}</HeaderText>
        <Form {...formProps} />
      </Modal>
    </div>
  );
};

export default VehicleForm;
