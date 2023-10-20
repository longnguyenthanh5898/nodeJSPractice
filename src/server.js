import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import connectDB from "./config/connectDB";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8080;

//cors
configCors(app);
//config body-parse
// Sử dụng middleware express.json() để phân tích cú pháp phần thân yêu cầu JSON
app.use(bodyParser.json());

// Sử dụng middleware bodyParser.urlencoded() để phân tích cú pháp phần thân yêu cầu x-www-form-urlencoded (nếu cần)
app.use(bodyParser.urlencoded({ extended: true }));

//check connect to database
connectDB();
//config view engine
configViewEngine(app);

//init web route
initWebRoutes(app);

initApiRoutes(app);

app.listen(port, () => {
  console.log(" >>>>>>>>>>>>>");
});
