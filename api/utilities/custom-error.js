
export const invalidModelError = (statusCode,message) => {
    const err = new Error();
    err.message = message + ' from function error!';
    err.statusCode = statusCode;
    return err;
}