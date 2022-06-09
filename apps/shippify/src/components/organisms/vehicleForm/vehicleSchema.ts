import * as yup from 'yup';

const vechicleSchema = yup.object().shape({
  id: yup.string().min(36).max(36),
  plate: yup.string().min(7).max(7).required('Required'),
  model: yup.string().required('Required'),
  type: yup.string().required('Required'),
  capacity: yup.string().required('Required'),
  creationDate: yup.string(),
  driverId: yup.string(),
});

export default vechicleSchema;
