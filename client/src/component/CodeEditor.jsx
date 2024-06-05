import { useState,useRef } from "react";

import html2canvas from 'html2canvas';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-xcode";

const CodeEditor = ({padding,showLines,fontsize,lineHeight}) => {
  function onChange(newValue) {
    setCode(newValue);
  }
  const componentRef = useRef();

  const [code, setCode] = useState(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HTML 5 Boilerplate</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <script src="index.js"></script>
    </body>
  </html>   
  `);
  const handleDownload = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = "snip.png";
    link.click();
  };
  return (
    <>
 
    <div ref={componentRef} className={`sm:w-3/5 w-screen sm:h-full  h-full    bg-purple-200  sm:ml-2 `}>
      <div className={`w-full overflow-visible flex justify-center h-fit items-center p-${padding} `}>
        <AceEditor
          placeholder="Placeholder Text"
          mode="jsx"
          theme="cobalt"
          width="100%"
          height="100%"
          wrapEnabled={true}
          name="index.html"
          onChange={onChange}
          fontSize={fontsize}
          lineHeight={lineHeight}
          showPrintMargin={false}
          showGutter={showLines}
          highlightActiveLine={true}
          //  focus={true}
          maxLines={Infinity}
          value={code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
             showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </div>
    </div>
 
    </>
  );
};

export default CodeEditor;
