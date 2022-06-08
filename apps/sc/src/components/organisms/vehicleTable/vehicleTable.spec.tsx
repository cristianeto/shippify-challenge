import { render } from '@testing-library/react';
import VehicleTable from './vehicleTable';
import { vehiclesData } from '@core/mocks';

describe('Vehicle Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VehicleTable data={vehiclesData} />);
    expect(baseElement).toBeTruthy();
  });
});
