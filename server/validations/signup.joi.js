import Joi from "joi";

export const signupValidation = (data, options) => {
  const schema = Joi.object({
    username: Joi.string().min(3).trim().max(30).required().messages({
      "string.min": "{#label} must be at least {#limit} characters long",
      "string.max": "{#label} must be at most {#limit} characters long",
      "any.required": "{#label} is required",
    }),
    email: Joi.string().trim().email().required().messages({
      "string.email": "Please provide a valid {#label}",
      "any.required": "{#label} is required",
    }),
    password: Joi.string()
      .trim()
      .min(6)
      .pattern(/[a-z]/, "lowercase")
      .pattern(/[A-Z]/, "uppercase")
      .pattern(/[0-9]/, "number")
      .required()
      .messages({
        "string.min": "{#label} must be at least {#limit} characters long",
        "string.pattern.name":
          "{#label} must contain at least one {#name} letter",
        "any.required": "{#label} is required",
      }),
  });
  return schema.validate(data, options);
};
