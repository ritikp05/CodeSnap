import React from "react";

const SideBar = ({ Setpadding,lineHeight, setShowLines, setFontSize,setLineHeight }) => {
  function changePadding(e) {
    Setpadding(e.target.value);
  }
  function showLineHandler() {
    setShowLines((prev) => !prev);
  }
  function handleFontSize(e) {
    console.log(e.target.value);
    setFontSize(parseInt(e.target.value));
  }
  return (
    <div className="h-full w-72 p-4 bg-gray-400 flex-col gap-3">
      
      <div className="flex ">
  <label className="label cursor-pointer">
    <span className="label-text mr-3">show lines</span> 
    <input type="checkbox" className="toggle"  onClick={showLineHandler} />
  </label>
</div>
       
      <section className="flex gap-4">
        Padding
        <button className="bg-white px-3" value={0} onClick={changePadding}>
          0{" "}
        </button>
        <button className="bg-white px-3" value={4} onClick={changePadding}>
          4
        </button>
        <button className="bg-white px-3" value={10} onClick={changePadding}>
          10
        </button>
        <button className="bg-white px-3" value={12} onClick={changePadding}>
          12
        </button>
      </section>
      <section className="flex  gap-4">
        Font size
        <button className="bg-white px-3" value={12} onClick={handleFontSize}>
          12
        </button>
        <button className="bg-white px-3" value={14} onClick={handleFontSize}>
          14
        </button>
        <button className="bg-white px-3" value={16} onClick={handleFontSize}>
          16
        </button>
        <button className="bg-white px-3" value={20} onClick={handleFontSize}>
          20
        </button>
      </section>

     <input type="range" min={21} max={28} value={lineHeight}  onChange={(e)=>setLineHeight(Number(e.target.value))} className="range range-xs my-2" />
{lineHeight}
      <h1>sd</h1>
      <h1>sd</h1>
    </div>
  );
};

export default SideBar;
