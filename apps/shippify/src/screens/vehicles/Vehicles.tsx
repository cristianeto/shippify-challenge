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
import { saveVehicle } from '../../services/vehicle';

const Title = styled.div`
  margin-bottom: 2rem;
`;

const initialState: IVehicle = {
  plate: '',
  model: '',
  type: '',
  capacity: '',
  creation_date: '',
  id: '',
  driverId: '',
};

const Vehicles: React.FC = () => {
  const {
    titles: { create, update },
  } = vehicleTexts;
  const { drivers, driverById } = useDrivers();
  const [selectedDriver, setSelectedDriver] = useState<string>('');
  const { doDelete, doCreate, doUpdate, setVehicles, vehicles, vehicleById } =
    useVehicles(selectedDriver);
  const [selectedVehicle, setSelectedVehicle] =
    useState<IVehicle>(initialState);
  const [type, setType] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleChangeSelected = ({ target }) => {
    setSelectedDriver(target.value);
  };

  const handleOpen = (newType: string, vehicleId = '') => {
    setOpen(true);
    setType(newType);
    populateForm(newType, vehicleId);
  };

  const handleClose = () => {
    setOpen(false);
    setType('');
  };

  const populateForm = (type: string, vehicleId = '') => {
    if (type === update && vehicleId !== '') {
      const vehicle = vehicleById(vehicleId);
      setSelectedVehicle(vehicle);
    } else {
      setSelectedVehicle(initialState);
    }
  };

  const handleOpenDeleteModal = (vehicleId = '') => {
    setOpenDeleteModal(true);
    const vehicle = vehicleById(vehicleId);
    setSelectedVehicle(vehicle);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const doSubmit = async (vehicle: IVehicle) => {
    const originalVehicles = [...vehicles];
    try {
      const { data: vehicleData } = await saveVehicle(vehicle);
      if (!vehicle.id) {
        doCreate(vehicleData, originalVehicles);
      } else {
        doUpdate(vehicle, vehicles);
      }
    } catch (error) {
      setVehicles(originalVehicles);
    }
    setOpen(false);
  };

  const handleDelete = (vehicleId: string) => {
    doDelete(vehicleId);
    setOpenDeleteModal(false);
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
              onClick={() => handleOpen(create)}
              disabled={selectedDriver !== '' ? false : true}
            >
              {create}
            </Button>
          </Box>
          <VechicleForm
            open={open}
            onClose={handleClose}
            type={type}
            initialState={selectedVehicle}
            doSubmit={doSubmit}
          />
          <VechicleTable
            data={vehicles}
            onOpen={handleOpen}
            onOpenDeleteModal={handleOpenDeleteModal}
          />
          <DeleteModal
            option={selectedVehicle}
            open={openDeleteModal}
            onClose={handleCloseDeleteModal}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Vehicles;
