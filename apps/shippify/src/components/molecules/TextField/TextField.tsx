import { ICustomTextField } from '@core/interfaces';
import { TextField } from '@mui/material';

const CustomTextField: React.FC<ICustomTextField> = ({
  error,
  label,
  placeholder,
  size = 'small',
  ...props
}) => {
  return (
    <TextField
      error={error}
      fullWidth
      label={label}
      placeholder={placeholder}
      size={size}
      variant="outlined"
      {...props}
    />
  );
};

export default CustomTextField;
