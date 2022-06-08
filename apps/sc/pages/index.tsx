import { IDriver, IVehicle } from '@core/interfaces';
import { useEffect, useState } from 'react';
import { getDriversByCompany } from '../src/services/driver';
import { getVehiclesByDriver } from '../src/services/vehicle';
import { VechicleTable } from '@organisms/*';
import SelectedDriver from '../src/components/molecules/selectedDriver/selectedDriver';
import styled from '@emotion/styled';

const Title = styled.div`
  margin-bottom: 2rem;
`;

export function Index() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);
  const [driverId, setDriverId] = useState<string>('');
  const [companyId] = useState('4');

  const populateVehiclesByDriver = async (driverId: string) => {
    const res = await getVehiclesByDriver(driverId);
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

  return (
    <div className="wrapper">
      <div className="container">
        <Title id="welcome">
          <h1>
            <span> Vehicles by driver </span>
          </h1>
        </Title>
        <SelectedDriver
          data={drivers}
          label="Driver"
          handleChangeValue={handleChangeSelected}
          helperText="Please select a driver"
          value={driverId}
        />
        {vehicles.length > 0 && <VechicleTable data={vehicles} />}
      </div>
    </div>
  );
}

export default Index;
