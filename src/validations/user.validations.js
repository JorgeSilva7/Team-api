import Joi from 'joi';
import { requiredEmail, requiredString } from './schema-common-types';
import envs from '../configs/environment';
import HTTPError from '../errors/http.error';
import userErrors from '../errors/user.errors';

const { validationStatusCode } = envs;
const validationErrorName = userErrors.create.validation.name;

const createValidation = Joi.object()
  .required()
  .keys({
    email: requiredEmail(
      new HTTPError({
        name: validationErrorName,
        message: userErrors.create.validation.messages.email,
        code: validationStatusCode,
      }),
    ),
    name: requiredString(
      new HTTPError({
        name: validationErrorName,
        message: userErrors.create.validation.messages.name,
        code: validationStatusCode,
      }),
    ),
  });

// eslint-disable-next-line import/prefer-default-export
export { createValidation };
