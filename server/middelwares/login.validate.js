import { loginValidation } from "../validations/login.joi.js";

export const validateLogin = (req, res, next) => {
  const { error } = loginValidation(req.body, { abortEarly: false });
  if (error)
    return res.status(400).json({
      success: false,
      message: error.details.map((detail) =>
        detail.message.replace(/['"]/g, "")
      ),
    });
  next();
};
