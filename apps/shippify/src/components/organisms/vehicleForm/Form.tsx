import { useContext } from 'react';

import { Button, Grid } from '@mui/material';
import { useFormik } from 'formik';

import { AppContext } from 'apps/shippify/src/context/appContext';
import { IForm, IVehicle } from '@core/interfaces';
import { TextField } from '@molecules/*';
import { vehicleForm as vehiclesTexts } from '@constants';
import vechicleSchema from './vehicleSchema';

const Form: React.FC<IForm> = ({ defaultForm, onSubmit, labels }) => {
  const {
    titles: { saveRegister },
  } = vehiclesTexts;

  const saveForm = (values: IVehicle) => {
    onSubmit(values);
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
      saveForm(values);
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
            {saveRegister}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
