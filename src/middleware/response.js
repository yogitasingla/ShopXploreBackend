import { v4 as uuidv4 } from 'uuid';

export default function (req, res, next) {

    const status = {};

    status["200"] = "Success";
    status["204"] = "No Content";
    status["400"] = "Bad Request";
    status["401"] = "UnAuthorised";
    status["403"] = "Forbidden";
    status["404"] = "Not Found";
    status["500"] = "Internal Server Error";
    status["504"] = "Gateway Timeout";

 
    res.ok = (data) => {
        res.status(200).json({
            success: true,
            message: status[200],
            request_id:  uuidv4(),
            data,
        });
    };
    
    res.badRequest = (error) => {
    console.log(error,"err-finalResp-")
        const response = {
            success: false,
            message: status[400],
            request_id:  uuidv4(),
            error
        }
    console.log(response,"finalResp-")
        res.status(400).json(response);
    };

    // used for anAuthorize Access
    res.unAuthorized = (error) => {
        res.status(401).json({
            success: false,
            message: error.message || status[401],
        });
    };

    res.timeOut = (error) => {
        res.status(504).json({
            success: false,
            message: status[504],
            error,
        });
    };

    res.serverError = (error) => {
        res.status(500).json({
            success: false,
            message: status[500],
            error,
        });
    };

    res.notFound = (error) => {
        res.status(404).json({
            success: false,
            message: status[404],
            error,
        });
    };

    res.noContent = (data) => {
        res.status(204).json({
            success: false,
            message: data.message,
            data: false,
        });
    };
    next();
};
