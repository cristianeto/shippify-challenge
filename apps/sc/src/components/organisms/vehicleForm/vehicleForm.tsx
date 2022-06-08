import { IVehicleForm } from '@core/interfaces';
import { Modal } from '@atoms/*';

const VehicleForm: React.FC<IVehicleForm> = ({ open, onClose }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        Form to create vehicle
      </Modal>
    </div>
  );
};

export default VehicleForm;
