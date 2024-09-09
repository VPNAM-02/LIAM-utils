export declare const removeEmptyObject: (obj: any) => any;
type ObjectType = {
    [key: string]: any;
};
export declare const pickFields: (obj: ObjectType, fields: string[]) => ObjectType;
export declare const transformObjToStr: (obj: any) => any;
export declare const transformArrObjToArrStr: (arr: any[]) => any[];
export {};
