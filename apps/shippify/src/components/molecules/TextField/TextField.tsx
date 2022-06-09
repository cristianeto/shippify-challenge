import { ICustomTextField } from '@core/interfaces';
import { Grid, TextField } from '@mui/material';

const CustomTextField: React.FC<ICustomTextField> = ({
  label,
  size = 'small',
  placeholder,
}) => {
  return (
    <TextField
      label={label}
      fullWidth
      size={size}
      variant="outlined"
      placeholder={placeholder}
    />
  );
};

export default CustomTextField;
