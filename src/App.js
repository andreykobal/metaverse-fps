import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "build/asdasddas.json",
  "build/UnityLoader.js"
);

const App = () => {
  return <Unity unityContent={unityContent} height="100%" width="950px" />
  ;
};

export default App