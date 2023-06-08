import React from "react";
import "../style/Main.css";
// import BGM from "../../src/秋、深まりて.mp3";

const main = (props) => {
  // console.log(props.selectedBgm.path);
  let selectedBgmPath = props.selectedBgm.path;
  // const selectedBgmObj = props.selectedBgm;
  let getImageList = props.allImageList;
  console.log(getImageList);
  let matchTagArray = [];
  // const searchMatchTag = () => {
  //   getImageList.forEach((element) => {
  //     console.log(element);
  //     if (
  //       element.tag1 === selectedBgmObj.tag1 ||
  //       element.tag2 === selectedBgmObj.tag1 ||
  //       element.tag3 === selectedBgmObj.tag1
  //     ) {
  //       matchTagArray.push(element);
  //     }
  //   });
  // getImageList.forEach((element) => {
  //   if (
  //     element.tag1 === selectedBgmObj.tag2 ||
  //     element.tag2 === selectedBgmObj.tag2 ||
  //     element.tag3 === selectedBgmObj.tag2
  //   ) {
  //     matchTagArray.push(element);
  //   }
  // });
  // getImageList.forEach((element) => {
  //   if (
  //     element.tag1 === selectedBgmObj.tag3 ||
  //     element.tag2 === selectedBgmObj.tag3 ||
  //     element.tag3 === selectedBgmObj.tag3
  //   ) {
  //     matchTagArray.push(element);
  //   }
  // });
  // props.setSelectedImage(matchTagArray);
  // };
  // searchMatchTag();
  // console.log(matchTagArray);
  // const video = document.getElementsByClassName("videoDiv");
  // video.loop = true;

  return (
    <div className="mainDiv">
      {/* <div className="videoDiv">
        {matchTagArray.map((path) => {
          return <video src={`https://docs.google.com/uc?id=${path}`}></video>;
        })}
      </div> */}

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
