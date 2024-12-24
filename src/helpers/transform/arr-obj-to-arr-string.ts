export const transformArrObjToArrStr = (arr: any[]) =>
  arr?.map((i: any) => {
    if (typeof i === "object") {
      return i?.value;
    }
    return i;
  });
