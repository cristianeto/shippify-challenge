import { useCallback, useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import { IDriver, IVehicle } from '@core/interfaces';
import { getDriversByCompanyId } from '../src/services/driver';
import { getVehiclesByDriverId } from '../src/services/vehicle';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { DriverSelect } from '@molecules/*';
import styled from '@emotion/styled';

const Title = styled.div`
  margin-bottom: 2rem;
`;

export function Index() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);
  const [driverId, setDriverId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const populateVehicles = async (driverId: string) => {
    const res = await getVehiclesByDriverId(driverId);
    const vehicles = res.data;
    setVehicles(vehicles);
  };

  const populateDrivers = async () => {
    const res = await getDriversByCompanyId("1");
    const drivers = res.data;
    setDrivers(drivers);
  };

  useEffect(() => {
    populateDrivers();
    driverId !== "" && populateVehicles(driverId);
  }, [driverId]);
  

  const handleChangeSelected = ({ target }) => {
    setDriverId(target.value);
  };

  const handleOpen = () => {
    setOpen(true);
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
          <Button variant="contained" onClick={handleOpen}>
            New vehicle
          </Button>
          <VechicleForm open={open} onClose={handleClose} />
        </Box>
        {vehicles.length > 0 && <VechicleTable data={vehicles} />}
      </div>
    </div>
  );
}

export default Index;
