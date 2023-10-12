import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  model: yup.string().required(),
  registration_number: yup.string().required(),
  capacity: yup.number().integer().required(),
  driver_id: yup.string().nullable().required(),
});
