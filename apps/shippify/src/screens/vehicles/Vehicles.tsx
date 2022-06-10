import { useState } from 'react';

import { Button, Box } from '@mui/material';
import styled from '@emotion/styled';

import { AppContext } from '../../context/appContext';
import { DriverSelect } from '@molecules/*';
import { IVehicle } from '@core/interfaces';
import { vehicleForm as vehicleTexts } from '@constants';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { useDrivers, useVehicles } from '@hooks';
import { DeleteModal } from '@organisms/*';
import { initialState } from '@hooks/useVehicles/useVehicles';

const Title = styled.div`
  margin-bottom: 2rem;
`;

const Vehicles: React.FC = () => {
  const {
    titles: { create },
  } = vehicleTexts;

  const [selectedDriver, setSelectedDriver] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showFormModal, setShowModal] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] =
    useState<IVehicle>(initialState);

  const { drivers, driverById } = useDrivers();
  const { vehicles, getVehicleById, doSubmit, populateForm, formType } =
    useVehicles(selectedDriver, setShowModal, setSelectedVehicle);

  const handleChangeSelected = ({ target }) => {
    setSelectedDriver(target.value);
  };

  const handleOpenVechicleFormModal = (newType: string, vehicleId = '') => {
    setShowModal(true);
    populateForm(newType, vehicleId);
  };

  const handleCloseVechicleFormModal = () => {
    setShowModal(false);
  };

  const handleOpenDialogModal = (vehicleId = '') => {
    setShowDeleteModal(true);
    const vehicle = getVehicleById(vehicleId);
    setSelectedVehicle(vehicle);
  };

  const handleCloseDialogModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = (vehicleId: string) => {
    //doDelete(vehicleId);
    setShowDeleteModal(false);
  };

  return (
    <AppContext.Provider value={driverById(selectedDriver)}>
      <div className="wrapper">
        <div className="container">
          <Title id="welcome">
            <h1>
              <span> Vehicles by driver </span>
            </h1>
          </Title>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <DriverSelect
              data={drivers}
              label="Driver"
              handleChangeValue={handleChangeSelected}
              helperText="Please select a driver"
              value={selectedDriver}
            />
            <Button
              variant="contained"
              onClick={() => handleOpenVechicleFormModal(create)}
              disabled={selectedDriver !== '' ? false : true}
            >
              {create}
            </Button>
          </Box>
          <VechicleForm
            open={showFormModal}
            onClose={handleCloseVechicleFormModal}
            type={formType}
            initialState={selectedVehicle}
            onSubmit={doSubmit}
          />
          <VechicleTable
            data={vehicles}
            onOpen={handleOpenVechicleFormModal}
            onOpenDeleteModal={handleOpenDialogModal}
          />
          <DeleteModal
            option={selectedVehicle}
            open={showDeleteModal}
            onClose={handleCloseDialogModal}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Vehicles;
