import express from 'express'
import homeController from '../controller/homeController'
import apiController from '../controller/api'
const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/", homeController.home)
    router.get("/about", homeController.about)
    router.get("/user", homeController.user)
    router.post("/users/create-user", homeController.handleCreateNewUser)

    router.get("/api/test-api", apiController.testApi)

    return app.use("/", router)
}

export default initWebRoutes