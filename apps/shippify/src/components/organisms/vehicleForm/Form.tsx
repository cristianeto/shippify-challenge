import { useFormik } from 'formik';

import { Button, Grid } from '@mui/material';
import { TextField } from '@molecules/*';
import vechicleSchema from './vehicleSchema';

const Form = ({ defaultForm, labels, titles }) => {
  const doSubmit = () => {
    console.log('submiting.....');
  };

  const formik = useFormik({
    initialValues: {
      id: defaultForm.id,
      plate: defaultForm.plate,
      model: defaultForm.model,
      type: defaultForm.type,
      capacity: defaultForm.capacity,
    },
    onSubmit: (values) => {
      console.log(values);
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
