import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import ArticlesRoute from "./routes/ArticlesRoute";
import AuthRoute from "./routes/AuthRoute";
// import bcrypt from "bcryptjs";

// bcrypt.hash('somePassowrd', 12).then(hash => {
//     console.log(hash);
// });


require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        message: "Learn Node.js"
    })
})


app.use("/api/v1/articles", ArticlesRoute);
app.use("/api/v1/auth", AuthRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
