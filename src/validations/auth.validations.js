import Joi from 'joi';
import { requiredEmail, requiredString } from './schema-common-types.js';
import envs from '../configs/environment.js';
import HTTPError from '../errors/http.error.js';
import authErrors from '../errors/auth.errors.js';

const { validationStatusCode } = envs;
const validationErrorName = authErrors.login.validation.name;

const loginValidation = Joi.object()
  .required()
  .keys({
    email: requiredEmail(
      new HTTPError({
        name: validationErrorName,
        message: authErrors.login.validation.messages.email,
        code: validationStatusCode,
      }),
    ),
    password: requiredString(
      new HTTPError({
        name: validationErrorName,
        message: authErrors.login.validation.messages.password,
        code: validationStatusCode,
      }),
    ),
  });

// eslint-disable-next-line import/prefer-default-export
export { loginValidation };
