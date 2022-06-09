import { useState } from 'react';

import { Button, Box } from '@mui/material';

import { DriverSelect } from '@molecules/*';
import styled from '@emotion/styled';
import useDrivers from '../src/hooks/useDrivers';
import useVehicles from '../src/hooks/useVehicles';
import { vehicleForm as vehicleTexts } from '@constants';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { AppContext } from '../src/context/appContext';
import { IVehicle } from '@core/interfaces';

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

export function Index() {
  const {
    titles: { create, update },
  } = vehicleTexts;
  const { drivers, driverById } = useDrivers();
  const [selectedDriver, setSelectedDriver] = useState<string>('');
  const { vehicles, vehicleById } = useVehicles(selectedDriver);
  const [selectedVehicle, setSelectedVehicle] =
    useState<IVehicle>(initialState);
  const [type, setType] = useState<string>(create);
  const [open, setOpen] = useState<boolean>(false);

  const handleChangeSelected = ({ target }) => {
    setSelectedDriver(target.value);
  };

  const handleOpen = (type: string, vehicleId: string = '') => {
    setOpen(true);
    populateForm(type, vehicleId);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const populateForm = (type: string, vehicleId: string = '') => {
    if (type === update && vehicleId !== '') {
      const vehicle = vehicleById(vehicleId);
      setSelectedVehicle(vehicle);
    } else {
      setSelectedVehicle(initialState);
    }
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
            width="100%"
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
              New vehicle
            </Button>
          </Box>
          <VechicleForm
            open={open}
            onClose={handleClose}
            type={type}
            initialState={selectedVehicle}
          />
          {vehicles.length > 0 && (
            <VechicleTable data={vehicles} onOpen={handleOpen} />
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Index;
