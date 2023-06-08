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
    const getAllBgm = async () => {
      console.log("func getAllBgm入りました");
      await fetch(`${URL}/api/home`)
        .then((getAllBgm) => getAllBgm.json())
        .then((jsonGetAllBgm) => setAllBgmList(jsonGetAllBgm));
    };
    getAllBgm();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={8}>
        <Main />
      </Grid>
      <Grid item xs={4}>
        <Sidebar allBgmList={allBgmList} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
