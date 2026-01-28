import express from "express";
import { PORT } from "./config/serverconfig.js";
import apiRouter from "./routes/apirouter.js";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.use('/api',apiRouter);


app.get("/ping", (req, res) => {
  return res.json({
    message: "pong",
  });
});

app.use((req, res) => {
    res.status(404).json({
        message: "not found",
    });
});

app.listen(PORT, () => {
  console.log("listening");
});


