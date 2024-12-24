type ObjectType = { [key: string]: any };
export const pickFieldsInObj = (obj: ObjectType, fields: string[]): ObjectType => {
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
