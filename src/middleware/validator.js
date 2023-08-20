const reqValidator = (reqValidator, key = "body") =>
    (req, res,next) => {
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: false // remove unknown props
        };
        const { error, value } = reqValidator.validate(req[key], options);
        if (error) {
            return res.badRequest(`Validation error: ${error.details.map(x => x.message).join(', ')}`)
        }
        req[key] = value;
        next();
    }


export default {
    reqValidator
}