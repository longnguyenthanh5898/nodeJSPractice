import db from "../models/index"
const createNewUser = async (email, password, username) => {
    try {
       await  db.users.save({
            username: username,
            password: password,
            email: email
        })
    } catch(error) {
        console.log("error", error)
    }
}

module.exports = {
    createNewUser
}