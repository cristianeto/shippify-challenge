import Form from './Form';
import { HeaderText } from './VehicleForm.style';
import { IVehicle, IVehicleForm } from '@core/interfaces';
import { Modal } from '@molecules/*';
import { vehicleForm as vehicleTexts } from '@constants';

const VehicleForm: React.FC<IVehicleForm> = ({
  open,
  onClose,
  type,
  initialState,
}) => {
  const { titles, labels } = vehicleTexts;

  const formProps = {
    defaultForm: initialState,
    labels,
    titles,
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <HeaderText>
          {type === titles.create ? titles.create : titles.update}
        </HeaderText>
        <Form {...formProps} />
      </Modal>
    </div>
  );
};

export default VehicleForm;
