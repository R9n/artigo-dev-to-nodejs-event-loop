class CustomError extends Error {

    constructor(code, message, ...params) {
        super(...params)

        this.code = code;
        this.message = message;
        this.isCustomError = true;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}
module.exports = CustomError;