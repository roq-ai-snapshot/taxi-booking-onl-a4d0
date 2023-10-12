import * as yup from 'yup';

export const priceValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  currency: yup.string().required(),
  booking_id: yup.string().nullable().required(),
});
