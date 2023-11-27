import { required, requiredAndValid } from './common.messages';

const ref = 'user';

export default {
  create: {
    validation: {
      name: `${ref}_login_validation_error`,
      messages: {
        email: requiredAndValid({ key: 'email', type: 'email' }),
        name: required('name'),
      },
    },
  },
};
