import loginRegisterService from "../service/loginRegisterService";

const testApi = (req, res) => {
  return res.status(200).json({
    message: "ok",
    data: "test api",
  });
};

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    //service: create user
    let data = await loginRegisterService.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch (error) {
    console.log(error);
  }
};

const handleLogin = async (req, res) => {
  try {
    if (!req.body.user|| !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    let data = await loginRegisterService.login(req.body)
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  testApi,
  handleRegister,
  handleLogin,
};
