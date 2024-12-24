export const transformObjToStr = (obj: any) => {
  if (typeof obj === "object") {
    return obj?.value;
  }
  return obj;
};
