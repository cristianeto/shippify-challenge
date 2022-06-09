import { useState } from 'react';

import { Button, Box } from '@mui/material';

import { DriverSelect } from '@molecules/*';
import styled from '@emotion/styled';
import useDrivers from '../src/hooks/useDrivers';
import useVehicles from '../src/hooks/useVehicles';
import vehicleForm from '../src/constants/vehicleForm';
import { VechicleForm, VechicleTable } from '@organisms/*';

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
            value={driverId}
          />
          <Button variant="contained" onClick={() => handleOpen('new')}>
            New vehicle
          </Button>
          <VechicleForm open={open} onClose={handleClose} type={type} />
        </Box>
        {vehicles.length > 0 && <VechicleTable data={vehicles} />}
      </div>
    </div>
  );
}

export default Index;
