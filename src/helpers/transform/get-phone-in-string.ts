export const getPhoneInString = (phone?: string) => {
  if (!phone) {
    return { phoneNumber: "", phoneCode: "" };
  }
  const indexAtSpace = phone?.indexOf(" ");
  const phoneCode = phone?.substring(0, indexAtSpace);
  const phoneNumber = phone?.substring(indexAtSpace + 1);
  return { phoneNumber, phoneCode };
};
