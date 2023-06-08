const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
// const BGM = require("./src/秋、深まりて.mp3");

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
// const port = process.env.PORT || 8080;
const port = 8080;

const buildPath = path.join(__dirname, "./build");

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());
app.use("/", express.static("public"));

//<<MVP>>webアプリ表示時BGM全件のリストを表示する。
app.get("/api/home", async (req, res) => {
  //   console.log("server.js getAllBgm入りました");
  const getAllBgm = () => {
    return knex.select("*").from("audio");
  };
  const allBgmList = await getAllBgm();
  // res.status(200).json();
  res.status(200).json(allBgmList);
});

//<<MVP>>サイドバーに表示している曲のリストを選択するとfetchでこのエンドポイントに飛んで
//google driveから音楽ファイルを取得してフロントエンドに渡す。
/*
app.get("/api/bgms/:id", async (req, res) => {
  //   console.log(req.params.id);
  const getBgmData = () => {
    return knex.select("*").from("audio").where({ id: req.params.id });
  };
  const bgmData = await getBgmData();
  //   const bgmDataUrl = getBgmData();
  //   console.log(bgmDataUrl);
  const bgmFile = await fetch(
    `https://drive.google.com/uc?id=${bgmData[0].path}`
    // `https://drive.google.com/uc?export=view&id=${bgmData[0].path}`
  );
  console.log(`https://drive.google.com/uc?id=${bgmData[0].path}`);
  //   console.log(`https://drive.google.com/uc?export=view&id=${bgmData[0].path}`);
  res.status(200).json(bgmFile);
});
*/

app.listen(port, () => {
  console.log(`Server is online on port: ${port}`);
  //   const testData = knex.select("*").from("audio");
  //   console.log(testData);
});
