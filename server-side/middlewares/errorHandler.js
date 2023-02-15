function errorHandler(err, req, res, next) {
    let name = err.name
    let code;
    let message;

    if (name === "SequelizeValidationError") {
        code = 400;
        message = err.errors[0].message
    } if (name === "NOT_FOUND") {
        code = 404;
        message = "Data not found"
    } else {
        code = 500;
        message = "Internal server error"
    }

    res.status(code).json({ message })
}

module.exports = errorHandler