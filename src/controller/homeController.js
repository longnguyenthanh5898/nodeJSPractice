

const home = (req, res) => {
    return res.send("home")
}
const about =  (req, res) => {
    return res.render("index.ejs", {name: "cho maq"})
}

const user = (req, res) => {
    return res.render("users.ejs")
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username)
    return res.redirect("/user")
}

module.exports = {
    home,
    about,
    user,
    handleCreateNewUser
}

