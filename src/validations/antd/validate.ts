import { validateEmail, validatePhoneNumber } from "../regex";
import { ValidateRule } from "./interface";

const VALIDATOR: ValidateRule = {
  email: { handle: validateEmail, message: "Please enter a valid email address!" },
  phoneNumber: { handle: validatePhoneNumber, message: "Please enter a valid phone number!" },
};

export const validateRule = (name: "email" | "phoneNumber" = "email", message?: string) => {
  const validate = VALIDATOR[name];

  return {
    validator(_: any, value: string) {
      if (value && !validate.handle(value)) {
        return Promise.reject(message ?? validate.message);
      } else {
        return Promise.resolve();
      }
    },
  };
};
