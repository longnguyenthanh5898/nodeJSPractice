import db from "../models/index";
import bcrypt from "bcryptjs";

const checkEmailExist = async (userEmail) => {
  const user = await db.Users.findOne({ where: { email: userEmail } });
  if (user) {
    return true;
  }

  return false;
};

const checkPhoneExist = async (userPhone) => {
  const user = await db.Users.findOne({ where: { phone: userPhone } });
  if (user) {
    return true;
  }

  return false;
};

const checkUserPassword = async (userPassword) => {
  const password = await db.Users.findOne({
    where: { password: userPassword },
  });

  if (password) {
    return true;
  }

  return false;
};
const salt = bcrypt.genSaltSync(10);

const registerNewUser = async (rawUserData) => {
  try {
    //check email/phonenumber exist
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist) {
      return {
        EM: "the email is already exist",
        EC: 1,
      };
    }

    let isPhoneExist = await checkPhoneExist(rawUserData.email);
    if (isPhoneExist) {
      return {
        EM: "the phone is already exist",
        EC: 1,
      };
    }
    // hash code
    const hashPassword = bcrypt.hashSync(rawUserData.password, salt);

    //create new user
    await db.Users.create({
      email: rawUserData.email,
      username: rawUserData.user,
      phone: rawUserData.phone,
      password: hashPassword,
    });
    return {
      EM: "A user is create successfully",
      EC: 0,
    };
  } catch (error) {
    console.log("error>>>>>", error);
    return {
      EM: "Something wrong in loginRegisterService.....",
      EC: -2,
    };
  }
};

const login = async (rawUserData) => {
  try {
    const trueUser =
      (await checkEmailExist(rawUserData.user)) ||
      (await checkPhoneExist(rawUserData.user));
    const hashPassword = bcrypt.hashSync(rawUserData.password, salt);
    const truePassword = checkUserPassword(hashPassword);

    if (trueUser) {
      if (truePassword) {
        return {
          EM: "Login successfully",
          EC: 0,
        };
      } else {
        return {
          EM: "Wrong password",
          EC: 1,
        };
      }
    } else {
      return {
        EM: "The account doesn't exist",
        EC: 1,
      };
    }
  } catch (error) {
    console.log("error>>>>>", error);
    return {
      EM: "Something wrong in loginRegisterService.....",
      EC: -2,
    };
  }
};

module.exports = {
  registerNewUser,
  login,
};
