import * as yup from 'yup';

export const cityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
});
