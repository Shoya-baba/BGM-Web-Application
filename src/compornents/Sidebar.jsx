import React from "react";
import "../style/Sidebar.css";

const Sidebar = (props) => {
  const getAllBgm = props.allBgmList;
  function sortFunc(e) {
    const sortText = e.target.id;
    const sortArray = getAllBgm.filter((bgmDataObj) => {
      if (
        bgmDataObj.tag1 === sortText ||
        bgmDataObj.tag2 === sortText ||
        bgmDataObj.tag3 === sortText
      ) {
        return true;
      } else {
      }
    });
    props.setAllBgmList(sortArray);
  }

  function resetFunc() {
    console.log("resetFunc入りました");
    props.setAllBgmList(props.forReset);
  }

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
                onClick={(e) => {
                  console.log(e);
                  props.setSelectedBgm(bgmDataObj);
                  props.setSelectedBgmName(bgmDataObj.title);
                }}
              >
                <div>{bgmDataObj.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="loopDiv">
        <p>ジャンルでloop</p>
        <div className="loopBtnDiv">
          <button>JAZZ</button>
          <button>Classic</button>
          <button>Healing</button>
        </div>
      </div>
      <div className="genreDiv">
        <p>ジャンルで絞り込み</p>
        <div className="genrebtndiv">
          <button id="jazz" onClick={sortFunc}>
            JAZZ
          </button>
          <button id="classic" onClick={sortFunc}>
            Classic
          </button>
          <button id="btc" onClick={sortFunc}>
            BTC
          </button>
        </div>
      </div>
      <div className="sceneDiv">
        <p>シーンで絞り込み</p>
        <div className="sceneBtnDiv">
          <button id="夏" onClick={sortFunc}>
            夏
          </button>
          <button id="秋" onClick={sortFunc}>
            秋
          </button>
          <button id="切ない" onClick={sortFunc}>
            切ない
          </button>
          <button id="悲しい" onClick={sortFunc}>
            悲しい
          </button>
          <button id="楽しい" onClick={sortFunc}>
            楽しい
          </button>
          <button id="ピアノ" onClick={sortFunc}>
            ピアノ
          </button>
          <button id="星" onClick={sortFunc}>
            星
          </button>
          <button id="火" onClick={sortFunc}>
            火
          </button>
        </div>
      </div>
      <div className="sortResetDiv">
        <p>絞り込みを解除する</p>
        <div className="sortReset">
          <button onClick={resetFunc}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
