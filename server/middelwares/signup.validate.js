import { signupValidation } from "../validations/signup.joi.js";

export const validateSignup = (req, res, next) => {
  const { error } = signupValidation(req.body, { abortEarly: false });
  if (error)
    return res.status(400).json({
      success: false,
      message: error.details.map((detail) =>
        detail.message.replace(/['"]/g, "")
      ),
    });
  next();
};
