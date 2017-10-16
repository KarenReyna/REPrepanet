export function customError(res: any, statusCode: number, errorMsg: string) {
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'application/json');
        res.write(errorMsg);
        res.end();
    }
export function success(res: any, dbResult: any) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(dbResult));
    res.end();
}