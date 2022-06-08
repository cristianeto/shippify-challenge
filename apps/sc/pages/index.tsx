import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getVehiclesByDriver } from '../src/services/vehicle';
import { IVehicle } from '@core/interfaces';
import { VechicleTable } from '@organisms/*';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [driverId, setDriverId] = useState('8');

  const populateVehiclesByDriver = async (driverId: string) => {
    const res = await getVehiclesByDriver(driverId);
    const vehicles = res.data;
    setVehicles(vehicles);
  };

  useEffect(() => {
    populateVehiclesByDriver(driverId);
  }, [driverId]);

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Vehículos por conductor </span>
            </h1>
          </div>
          <VechicleTable data={vehicles} />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
