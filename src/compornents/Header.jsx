import React from "react";
import "../style/Header.css";
//<<MVP>>曲名、再生ボタン、停止ボタンの表示
//<<release2>>再生ボタン等をアイコンにする、曲名が流れるモーション追加
const Header = (props) => {
  return (
    <div className="headerDiv">
      <h2>BGM Web Application</h2>
      <div className="flowTextDiv">
        <p>{props.selectedBgmName}</p>
      </div>
    </div>
  );
};

export default Header;
