import { authenticationMessages } from '../constant/messages.js';

const authRouter = (req, res,next) => {
    
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const encodedCredentials = authHeader.split(' ')[1];
        const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8');
        const [receivedUsername, receivedPassword] = decodedCredentials.split(':');
        
        if (receivedUsername === process.env.USERNAME_KEY  && receivedPassword === process.env.PASSWORD_KEY ) {
            next();
        }
        if(receivedUsername != process.env.USERNAME_KEY || receivedPassword != process.env.PASSWORD_KEY) {
            return res.unAuthorized(authenticationMessages.INVALID_CREDENTIALS)
        }
    }
    else  return res.badRequest(authenticationMessages.CREDENTIAL_MISSING)
}
export default authRouter;