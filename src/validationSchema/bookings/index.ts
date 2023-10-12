import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  customer_id: yup.string().nullable().required(),
  driver_id: yup.string().nullable().required(),
  vehicle_id: yup.string().nullable().required(),
  start_city_id: yup.string().nullable().required(),
  end_city_id: yup.string().nullable().required(),
});
