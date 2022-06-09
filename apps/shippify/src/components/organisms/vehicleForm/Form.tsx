import { Button, Grid } from '@mui/material';
import { TextField } from '@molecules/*';

const Form = ({ defaultForm, labels, titles }) => {
  const register = (name: string) => ({
    label: labels[name],
    name,
  });

  return (
    <Grid
      container
      spacing={2}
      md={12}
      style={{ marginTop: '1em' }}
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <TextField
          label={labels.plate}
          {...register('plate')}
          placeholder="NEW-SD"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={labels.model}
          {...register('model')}
          placeholder="Camaro"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={labels.type}
          {...register('type')}
          placeholder="Sport"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={labels.capacity}
          {...register('capacity')}
          placeholder="5 passengers"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth>
          {titles.saveRegister}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
