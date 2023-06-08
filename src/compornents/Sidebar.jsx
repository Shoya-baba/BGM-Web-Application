import React from "react";
import "../style/Sidebar.css";

const Sidebar = (props) => {
  //   console.log("↓↓↓↓↓↓ props.allBgmListの確認↓↓↓↓↓↓ ");
  //   console.log(props.allBgmList);

  const getAllBgm = props.allBgmList;
  return (
    <div className="sidebarDiv">
      <p>select BGM</p>
      <div className="bgmUl">
        <ul className="sidebarList">
          {getAllBgm.map((bgmDataObj, key) => {
            return (
              <li
                key={key}
                className="bgm"
                onClick={() => {
                  console.log(bgmDataObj.path);
                  // console.log(`key:${key}  title:${bgmDataObj.title}`);
                  // const bgmFile = async () => {
                  //   await fetch(
                  //     `https://drive.google.com/uc?id=${bgmDataObj.path}&.mp3`,
                  //     {
                  //       mode: "cors",
                  //       credentials: "include",
                  //     }
                  //   );
                  // };
                  // bgmFile();
                }}
              >
                <div>{bgmDataObj.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

//google driveからファイルを取得するパス例
//expressで取得しないとcorsでerrorになる為
//   `https://drive.google.com/uc?export=view&id=${bgmDataObj.path}`
//   `https://drive.google.com/uc?id=${bgmDataObj.path}`
