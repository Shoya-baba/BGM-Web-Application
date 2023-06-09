import React from "react";
import "../style/Main.css";

const main = (props) => {
  let selectedBgmPath = props.selectedBgm.path;
  const selectedBgmObj = props.selectedBgm;
  let getImageList = props.allImageList;
  console.log(getImageList);
  let matchTagArray = [];
  const searchMatchTag = () => {
    getImageList.forEach((element) => {
      if (
        element.tag1 === selectedBgmObj.tag1 ||
        element.tag2 === selectedBgmObj.tag1 ||
        element.tag3 === selectedBgmObj.tag1
      ) {
        matchTagArray.push(element.path);
      }
      if (
        element.tag1 === selectedBgmObj.tag2 ||
        element.tag2 === selectedBgmObj.tag2 ||
        element.tag3 === selectedBgmObj.tag2
      ) {
        matchTagArray.push(element.path);
      }
      if (
        element.tag1 === selectedBgmObj.tag3 ||
        element.tag2 === selectedBgmObj.tag3 ||
        element.tag3 === selectedBgmObj.tag3
      ) {
        matchTagArray.push(element.path);
      }
    });
  };
  searchMatchTag();
  console.log(matchTagArray);

  return (
    <div className="mainDiv">
      {/* 断念用 */}
      <div className="videoDiv">
        <video
          autoPlay
          loop
          src={`https://drive.google.com/uc?id=${
            matchTagArray[Math.floor(Math.random() * matchTagArray.length)]
          }&export=download`}
          // src="https://drive.google.com/uc?id=1_pfu92xX4rjzJK81MXF0JITsyyfMLqR5&export=download"
        ></video>
      </div>
      {/* こっちが実装したい方 */}
      {/* <video autoPlay>
        {matchTagArray.map((moviePath) => {
          <source
            src={`https://drive.google.com/uc?id=${moviePath}&export=download`}
          ></source>;
        })}
      </video> */}
      <div className="audioDiv">
        <audio
          src={`https://docs.google.com/uc?id=${selectedBgmPath}`}
          controls
        ></audio>
      </div>
    </div>
  );
};

export default main;
