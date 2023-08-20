import { Router } from "express";
const router = Router();
import LoginController from "../../controller/auth/loginController.js";
import reqValidator from "../../middleware/validator.js";
const validator = reqValidator;
// import schema from "../../validator/addressBifuractionValidator";

const loginController = new LoginController();
router.get("/login", loginController.login);

export default router;
