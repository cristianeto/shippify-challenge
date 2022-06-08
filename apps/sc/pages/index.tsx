import { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import { IDriver, IVehicle } from '@core/interfaces';
import { getDriversByCompany } from '../src/services/driver';
import { getVehiclesByDriver } from '../src/services/vehicle';
import { VechicleForm, VechicleTable } from '@organisms/*';
import { SelectedDriver } from '@molecules/*';
import styled from '@emotion/styled';

const Title = styled.div`
  margin-bottom: 2rem;
`;

export function Index() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);
  const [driverId, setDriverId] = useState<string>('');
  const [companyId] = useState<string>('1');
  const [open, setOpen] = useState<boolean>(false);

  const populateVehiclesByDriver = async (driverId: string) => {
    const res = await getVehiclesByDriver(companyId, driverId);
    const vehicles = res.data;
    setVehicles(vehicles);
  };

  const populateDriversByCompany = async (companyId: string) => {
    const res = await getDriversByCompany(companyId);
    const drivers = res.data;
    setDrivers(drivers);
  };

  useEffect(() => {
    populateVehiclesByDriver(driverId);
    populateDriversByCompany(companyId);
  }, [driverId, companyId]);

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
          <SelectedDriver
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
