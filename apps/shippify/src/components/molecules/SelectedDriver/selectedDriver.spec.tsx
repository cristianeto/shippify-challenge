import { render } from '@testing-library/react';
import { driversData } from '@core/mocks';
import { SelectedDriver } from '@molecules/*';

describe('Vehicle Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SelectedDriver
        data={driversData}
        label="Driver"
        handleChangeValue={jest.fn()}
        helperText="Please select a driver"
        value="1"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
