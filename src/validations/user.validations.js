import Joi from 'joi';
import { requiredEmail, requiredString } from './schema-common-types.js';
import envs from '../configs/environment.js';
import HTTPError from '../errors/http.error.js';
import userErrors from '../errors/user.errors.js';

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

const bulkCreateValidation = Joi.array().items(createValidation);

// eslint-disable-next-line import/prefer-default-export
export { createValidation, bulkCreateValidation };
