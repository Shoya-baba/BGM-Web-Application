import React from "react";
import "../style/Header.css";
//<<MVP>>曲名、再生ボタン、停止ボタンの表示
//<<release2>>再生ボタン等をアイコンにする、曲名が流れるモーション追加
const Header = () => {
  return (
    <div className="headerDiv">
      <h2>BGM Web Application</h2>
      {/* 再生、停止ボタンの反転 */}
      <div className="bgmButton">
        <button>play</button>
        <button>pause</button>
        <button>stop</button>
      </div>
      <p>曲名</p>
    </div>
  );
};

export default Header;
