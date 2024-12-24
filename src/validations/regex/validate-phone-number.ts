import { validateRegex } from "./index";

export const validatePhoneNumber = (phoneNumber: string, regex = /^[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|/-]+$/g): boolean =>
  validateRegex(phoneNumber, regex);
