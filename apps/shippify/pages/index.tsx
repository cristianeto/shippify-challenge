import { useContext, useState } from 'react';

import { Button, Box } from '@mui/material';

import { DriverSelect } from '@molecules/*';
import styled from '@emotion/styled';
import useDrivers from '../src/hooks/useDrivers';
import useVehicles from '../src/hooks/useVehicles';
import vehicleForm from '../src/constants/vehicleForm';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { AppContext } from '../src/context/appContext';

const Title = styled.div`
  margin-bottom: 2rem;
`;

export function Index() {
  const {
    titles: { newRegister, updateRegister },
  } = vehicleForm;
  const { drivers } = useDrivers();
  const [driverId, setDriverId] = useState<string>('');
  const { vehicles } = useVehicles(driverId);
  const [type, setType] = useState<string>(newRegister);
  const [open, setOpen] = useState<boolean>(false);

  const driverById = (driverId: string) => {
    return drivers.find((driver) => driver.id === driverId);
  };

  const handleChangeSelected = ({ target }) => {
    setDriverId(target.value);
  };

  const handleOpen = (type: string) => {
    setOpen(true);
    setType(newRegister);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider value={driverById(driverId)}>
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
              value={driverId}
            />
            <Button
              variant="contained"
              onClick={() => handleOpen('new')}
              disabled={driverId !== '' ? false : true}
            >
              New vehicle
            </Button>
          </Box>
          <VechicleForm open={open} onClose={handleClose} type={type} />
          {vehicles.length > 0 && <VechicleTable data={vehicles} />}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Index;
