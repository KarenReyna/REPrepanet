export function CustomError(res: any, statusCode: number, errorMsg: string) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.write(errorMsg);
    res.end();
}
export function Success(res: any, objectType: ResponseObjectType, objectName: string, object?: any) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(responseObject(objectType, objectName, object));
    res.end();
}
export enum ResponseObjectType {
    Object,
    Array
}

function responseObject(type: ResponseObjectType, objectName: string, object?: any) {
    var data = {};
    data[objectName] = objectOrEmpty(object, type);
    return JSON.stringify(data);
}

function objectOrEmpty(type: ResponseObjectType, object?: any): any {
    if (object === null) {
        return type == ResponseObjectType.Array ? [] : {};
    }
    return object;
}