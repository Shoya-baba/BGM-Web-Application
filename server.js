const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const knex = require("knex")({
  client: "pg",
  connection: process.env.DATABASE_URL || {
    host: "127.0.0.1",
    user: "user",
    password: "user",
    database: "bgmapplication",
  },
});
const app = express();
const port = 8080;

const buildPath = path.join(__dirname, "./build");

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use("/", express.static("public"));

//<<MVP>>webアプリ表示時BGM全件のリストを表示する。
app.get("/api/home", async (req, res) => {
  //DBからaudioデータを取得
  const getAllBgm = () => {
    return knex.select("*").from("audio");
  };
  const allBgmList = await getAllBgm();

  //DBからimageデータを取得
  const getAllImage = () => {
    return knex.select("*").from("image");
  };
  const allImageList = await getAllImage();
  res.status(200).json([allBgmList, allImageList]);
});

app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
});
