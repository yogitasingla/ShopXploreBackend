
class LoginController {
    constructor() {
    }
    login = (req, res) => {
      try{
        console.log('inside login')
        return res.ok('login sucessfull')
      }
        catch (error) {
            return res.serverError(error.message)
        }
    }
}
export default LoginController;