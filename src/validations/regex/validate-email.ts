import { validateRegex } from "./index";

export const validateEmail = (email: string, regex = /\S+@\S+\.\S+/): boolean => validateRegex(email, regex);
