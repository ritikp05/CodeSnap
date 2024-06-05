import React,{useState} from "react";
import CodeEditor from "../component/CodeEditor";
import SideBar from "../component/SideBar"
const Home = () => {
  
const [padding,Setpadding] = useState(0)
const [showLines,setShowLines] = useState(false)
const [fontsize,setFontSize] =useState(16)
const[lineHeight,setLineHeight] = useState(24)
  return (
    <div className="flex sm:flex-row flex-wrap flex-col h-1/2 w-full  justify-start gap-2">
      <CodeEditor padding={padding} lineHeight={lineHeight} showLines={showLines} fontsize={fontsize} />
    <SideBar Setpadding={Setpadding}lineHeight={lineHeight} setShowLines={setShowLines} setFontSize={setFontSize} setLineHeight={setLineHeight}/>
    </div>
  );
};

export default Home;
