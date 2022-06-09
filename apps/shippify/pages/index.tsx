import { useState } from 'react';

import { Button, Box } from '@mui/material';

import { DriverSelect } from '@molecules/*';
import styled from '@emotion/styled';
import useDrivers from '../src/hooks/useDrivers';
import useVehicles from '../src/hooks/useVehicles';
import { vehicleForm as vehicleTexts } from '@constants';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { AppContext } from '../src/context/appContext';

const Title = styled.div`
  margin-bottom: 2rem;
`;

export function Index() {
  const {
    titles: { create },
  } = vehicleTexts;
  const { drivers } = useDrivers();
  const [driverId, setDriverId] = useState<string>('');
  const { vehicles } = useVehicles(driverId);
  const [type, setType] = useState<string>(create);
  const [open, setOpen] = useState<boolean>(false);

  const driverById = (driverId: string) => {
    return drivers.find((driver) => driver.id === driverId);
  };

  const handleChangeSelected = ({ target }) => {
    setDriverId(target.value);
  };

  const handleOpen = (type: string) => {
    setOpen(true);
    const driver = driverById(driverId);
    console.log(driver.first_name + driver.last_name);
    setType(type);
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
              onClick={() => handleOpen(create)}
              disabled={driverId !== '' ? false : true}
            >
              New vehicle
            </Button>
          </Box>
          <VechicleForm open={open} onClose={handleClose} type={type} />
          {vehicles.length > 0 && (
            <VechicleTable data={vehicles} onOpen={handleOpen} />
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default Index;
