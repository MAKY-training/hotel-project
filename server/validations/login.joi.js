import Joi from "joi";

export const loginValidation = (data, options) => {
  const schema = Joi.object({
    email: Joi.string().trim().email().required().messages({
      "string.email": "Please provide a valid {#label}",
      "any.required": "{#label} is required",
    }),
    password: Joi.string().trim().required().messages({
      "any.required": "{#label} is required",
    }),
  });
  return schema.validate(data, options);
};
