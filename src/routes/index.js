import authRouter  from "../middleware/auth.js";
import loginRouter from "./auth/loginRouter.js"

export default (app) => {
  app.use(authRouter);
  app.use("/api", loginRouter);
};
