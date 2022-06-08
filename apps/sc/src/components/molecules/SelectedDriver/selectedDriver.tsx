import { IDriver } from '@core/interfaces';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const SelectedDriver = ({ data: drivers, value, handleChangeValue }) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      size="small"
      label="Driver"
      value={value}
      onChange={handleChangeValue}
      helperText="Please select a driver"
    >
      {drivers.map((driver: IDriver) => (
        <MenuItem key={driver.id} value={driver.id}>
          {driver.first_name} {driver.last_name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectedDriver;
