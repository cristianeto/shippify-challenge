import { render } from '@testing-library/react';
import { driversData } from '@core/mocks';
import SelectedDriver from '../selectedDriver/selectedDriver';

describe('Vehicle Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SelectedDriver
        data={driversData}
        value="1"
        handleChangeValue={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
