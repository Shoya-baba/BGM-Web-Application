import React from "react";
import "../style/Main.css";
// import BGM from "../../src/秋、深まりて.mp3";

const main = (props) => {
  // console.log(props.selectedBgm.path);
  let selectedBgmPath = props.selectedBgm.path;
  const selectedBgmObj = props.selectedBgm;
  let getImageList = props.allImageList;
  console.log(getImageList);
  let matchTagArray = [];
  const searchMatchTag = () => {
    getImageList.forEach((element) => {
      // console.log(element);
      if (
        element.tag1 === selectedBgmObj.tag1 ||
        element.tag2 === selectedBgmObj.tag1 ||
        element.tag3 === selectedBgmObj.tag1
      ) {
        matchTagArray.push(element.path);
        // console.log(matchTagArray);
      }
      if (
        element.tag1 === selectedBgmObj.tag2 ||
        element.tag2 === selectedBgmObj.tag2 ||
        element.tag3 === selectedBgmObj.tag2
      ) {
        matchTagArray.push(element.path);
        // console.log(matchTagArray);
      }
      if (
        element.tag1 === selectedBgmObj.tag3 ||
        element.tag2 === selectedBgmObj.tag3 ||
        element.tag3 === selectedBgmObj.tag3
      ) {
        matchTagArray.push(element.path);
        // console.log(matchTagArray);
      }
      // console.log("終点です");
    });

    // props.setSelectedImage(matchTagArray);
  };
  searchMatchTag();
  console.log(matchTagArray);
  // const video = document.getElementsByClassName("videoDiv");
  // video.loop = true;

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
          // src={`https://docs.google.com/uc?id=1L4VPcXyH-DDmQFJuIfHBW-GMrgHc_Mig`}
          controls
        ></audio>
      </div>
    </div>
  );
};

export default main;
