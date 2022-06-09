import { IDriver, ISelectedDriver } from '@core/interfaces';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const DriverSelect: React.FC<ISelectedDriver> = ({
  data: drivers,
  label,
  handleChangeValue,
  helperText,
  value,
}) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      size="small"
      label={label}
      value={value}
      onChange={handleChangeValue}
      helperText={helperText}
    >
      {drivers.map((driver: IDriver) => (
        <MenuItem key={driver.id} value={driver.id}>
          {driver.first_name} {driver.last_name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DriverSelect;
