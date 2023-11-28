import Joi from 'joi';
import clubErrors from '../errors/club.errors.js';
import { optionalString, requiredString } from './schema-common-types.js';
import envs from '../configs/environment.js';
import HTTPError from '../errors/http.error.js';

const { validationStatusCode } = envs;
const validationErrorName = clubErrors.validation.name;

const createValidation = Joi.object()
  .required()
  .keys({
    name: requiredString(
      new HTTPError({
        name: validationErrorName,
        message: clubErrors.validation.messages.name,
        code: validationStatusCode,
      }),
    ),
    description: optionalString(
      new HTTPError({
        name: validationErrorName,
        message: clubErrors.validation.messages.description,
        code: validationStatusCode,
      }),
    ),
  });

export { createValidation };
