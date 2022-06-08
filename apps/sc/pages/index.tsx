import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getVehiclesByDriver } from '../src/services/vehicle';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [driverId, setDriverId] = useState('8');

  const populateVehiclesByDriver = async (driverId: string) => {
    const res = await getVehiclesByDriver(driverId);
    console.log(res.data);
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
              <span> Hello there, </span>
              Welcome sc 👋
            </h1>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
