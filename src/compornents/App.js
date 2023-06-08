import React, { useState, useEffect } from "react";
// import useSound from "use-sound";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Main from "./Main";
import Grid from "@mui/material/Grid";

function App() {
  //webアプリ表示時はuseEffectで取得したデータをsetAllBgmListで更新してサイドバーで表示する。
  const [allBgmList, setAllBgmList] = useState([]);
  //サイドバーで選曲した情報で更新
  const [selectedBgm, setSelectedBgm] = useState("");
  //headerの曲名に現在流れている曲名を表示
  const [selectedBgmName, setSelectedBgmName] = useState("");
  //サイドバーのresetボタン用
  const [forReset, setForReset] = useState([]);
  //mainの画像用
  const [allImageList, setAllImageList] = useState([]);
  //選曲にマッチした画像監視
  const [selectedImage, setSelectedImage] = useState([]);
  // console.log();
  const URL =
    process.env.NODE_ENV === "production"
      ? "https://bgm-web-application.onrender.com"
      : "http://localhost:8080";

  useEffect(() => {
    console.log("useEffect処理に入りました");
    //expressエンドポインを指定してdbから曲全件のURLを取得する。
    //useStateで取得したデータで更新する。
    //サイドバーへの表示はuseStateの変数を利用する。
    const getAllData = async () => {
      await fetch(`${URL}/api/home`)
        .then((getAllData) => getAllData.json())
        .then((jsonGetAllData) => {
          const getAllBgm = jsonGetAllData[0];
          const getAllImage = jsonGetAllData[1];
          setAllBgmList(getAllBgm);
          setAllImageList(getAllImage);
          setForReset(getAllBgm);
          console.log("getAllBgm : " + getAllBgm);
          console.log("getAllImage : " + getAllImage);
          console.log("forReset : " + getAllBgm);
        });
    };
    /*
    const getAllBgm = async () => {
      console.log("func getAllBgm入りました");
      await fetch(`${URL}/api/home`)
        .then((getAllBgm) => getAllBgm.json())
        .then((jsonGetAllBgm) => {
          setAllBgmList(jsonGetAllBgm);
          setForReset(jsonGetAllBgm);
        });
    };
    */
    getAllData();
    // getAllBgm();
  }, []);

  // console.log();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header selectedBgmName={selectedBgmName} />
      </Grid>
      <Grid item xs={8}>
        <Main
          selectedBgm={selectedBgm}
          allImageList={allImageList}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </Grid>
      <Grid item xs={4}>
        <Sidebar
          setAllBgmList={setAllBgmList}
          allBgmList={allBgmList}
          setSelectedBgm={setSelectedBgm}
          setSelectedBgmName={setSelectedBgmName}
          forReset={forReset}
        />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
