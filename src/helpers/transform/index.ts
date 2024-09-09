export const removeEmptyObject = (obj: any): any => {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    Object.keys(obj).forEach((key) => {
      // Recursively remove empty fields from nested objects
      if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        removeEmptyObject(obj[key]);
      }

      // Remove the key if its value is null, undefined, or an empty object
      if (obj[key] === null || obj[key] === undefined || (typeof obj[key] === "object" && Object.keys(obj[key]).length === 0)) {
        delete obj[key];
      }
    });
  }
  return obj;
};

type ObjectType = { [key: string]: any };
export const pickFields = (obj: ObjectType, fields: string[]): ObjectType => {
  const result: ObjectType = {};

  fields.forEach((field) => {
    const keys = field.split(".");
    let current = obj;
    let currentResult = result;

    // Navigate through the keys to find or create the path
    keys.forEach((key, index) => {
      if (current && current.hasOwnProperty(key)) {
        // If it's the last key, assign the value
        if (index === keys.length - 1) {
          currentResult[key] = current[key];
        } else {
          // If it's not the last key, ensure the path exists
          currentResult[key] = currentResult[key] || {};
          current = current[key];
          currentResult = currentResult[key];
        }
      }
    });
  });

  return result;
};

export const transformObjToStr = (obj: any) => {
  if (typeof obj === "object") {
    return obj?.value;
  }
  return obj;
};

export const transformArrObjToArrStr = (arr: any[]) =>
  arr?.map((i: any) => {
    if (typeof i === "object") {
      return i?.value;
    }
    return i;
  });
