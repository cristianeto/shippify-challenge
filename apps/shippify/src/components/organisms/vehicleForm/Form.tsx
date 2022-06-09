import { useFormik } from 'formik';

import { Button, Grid } from '@mui/material';
import { TextField } from '@molecules/*';
import vechicleSchema from './vehicleSchema';
import { useContext } from 'react';
import { AppContext } from 'apps/shippify/src/context/appContext';
import { IVehicle } from '@core/interfaces';

const Form = ({ defaultForm, labels, titles }) => {
  const doSubmit = (values: IVehicle) => {
    console.log('submiting.....', values);
  };

  const driver = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      id: defaultForm.id,
      plate: defaultForm.plate,
      model: defaultForm.model,
      type: defaultForm.type,
      capacity: defaultForm.capacity,
      creation_date: defaultForm.creation_date,
      driverId: driver?.id,
    },
    onSubmit: (values: IVehicle) => {
      doSubmit(values);
    },
    validationSchema: vechicleSchema,
  });

  const register = (name: string) => ({
    error: formik.errors[name] && formik.touched[name],
    helperText: formik.touched[name] && formik.errors[name],
    label: labels[name],
    name,
    onChange: formik.handleChange,
    value: formik.values[name],
    onBlur: formik.handleBlur,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        style={{ marginTop: '1em' }}
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <TextField {...register('plate')} placeholder="NEW-SSD" />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('model')} placeholder="Camaro" />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('type')} placeholder="Sport" />
        </Grid>
        <Grid item xs={12}>
          <TextField {...register('capacity')} placeholder="5 passengers" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth type="submit">
            {titles.saveRegister}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
