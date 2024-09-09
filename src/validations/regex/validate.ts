export const validateRegex = (value: string, regex: RegExp): boolean => regex.test(value);
export const validateEmail = (email: string, regex = /\S+@\S+\.\S+/): boolean => validateRegex(email, regex);
export const validatePhoneNumber = (phoneNumber: string, regex = /^[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|/-]+$/g): boolean =>
  validateRegex(phoneNumber, regex);
